import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Comment,
  CommentEntityType,
  CreateCommentRequest,
  UpdateCommentRequest,
  AddReactionRequest,
} from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentApiService {
  private readonly api = inject(ApiClientService);

  getComments(entityId: string, entityType: CommentEntityType, page: number = 1, limit: number = 20): Observable<ApiResponse<Comment[]>> {
    return this.api.get<ApiResponse<Comment[]>>(API_ENDPOINTS.COMMENTS, {
      params: { entityId, entityType, page: String(page), limit: String(limit) },
    });
  }

  createComment(payload: CreateCommentRequest): Observable<ApiResponse<Comment>> {
    return this.api.post<ApiResponse<Comment>>(API_ENDPOINTS.COMMENTS, payload);
  }

  getReplies(commentId: string, page: number = 1, limit: number = 20): Observable<ApiResponse<Comment[]>> {
    return this.api.get<ApiResponse<Comment[]>>(`${API_ENDPOINTS.COMMENTS}/${commentId}/replies`, {
      params: { page: String(page), limit: String(limit) },
    });
  }

  updateComment(id: string, payload: UpdateCommentRequest): Observable<ApiResponse<Comment>> {
    return this.api.patch<ApiResponse<Comment>>(`${API_ENDPOINTS.COMMENTS}/${id}`, payload);
  }

  deleteComment(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.COMMENTS}/${id}`);
  }

  addReaction(id: string, payload: AddReactionRequest): Observable<ApiResponse<Comment>> {
    return this.api.post<ApiResponse<Comment>>(`${API_ENDPOINTS.COMMENTS}/${id}/reactions`, payload);
  }

  resolveComment(id: string): Observable<ApiResponse<Comment>> {
    return this.api.patch<ApiResponse<Comment>>(`${API_ENDPOINTS.COMMENTS}/${id}/resolve`);
  }

  pinComment(id: string): Observable<ApiResponse<Comment>> {
    return this.api.patch<ApiResponse<Comment>>(`${API_ENDPOINTS.COMMENTS}/${id}/pin`);
  }
}
