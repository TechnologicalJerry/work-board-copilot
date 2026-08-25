import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  Board,
  BoardColumn,
  BoardSwimlane,
  CreateBoardRequest,
  UpdateBoardRequest,
  CreateColumnRequest,
} from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardApiService {
  private readonly api = inject(ApiClientService);

  getBoards(projectId: string): Observable<ApiResponse<Board[]>> {
    return this.api.get<ApiResponse<Board[]>>(API_ENDPOINTS.BOARDS, {
      params: { projectId },
    });
  }

  getBoardById(id: string): Observable<ApiResponse<Board>> {
    return this.api.get<ApiResponse<Board>>(`${API_ENDPOINTS.BOARDS}/${id}`);
  }

  createBoard(payload: CreateBoardRequest): Observable<ApiResponse<Board>> {
    return this.api.post<ApiResponse<Board>>(API_ENDPOINTS.BOARDS, payload);
  }

  updateBoard(id: string, payload: UpdateBoardRequest): Observable<ApiResponse<Board>> {
    return this.api.put<ApiResponse<Board>>(`${API_ENDPOINTS.BOARDS}/${id}`, payload);
  }

  deleteBoard(id: string): Observable<ApiResponse<{ success: boolean }>> {
    return this.api.delete<ApiResponse<{ success: boolean }>>(`${API_ENDPOINTS.BOARDS}/${id}`);
  }

  getColumns(boardId: string): Observable<ApiResponse<BoardColumn[]>> {
    return this.api.get<ApiResponse<BoardColumn[]>>(`${API_ENDPOINTS.BOARDS}/${boardId}/columns`);
  }

  addColumn(boardId: string, payload: CreateColumnRequest): Observable<ApiResponse<BoardColumn>> {
    return this.api.post<ApiResponse<BoardColumn>>(`${API_ENDPOINTS.BOARDS}/${boardId}/columns`, payload);
  }

  reorderColumns(boardId: string, columnIds: string[]): Observable<ApiResponse<BoardColumn[]>> {
    return this.api.put<ApiResponse<BoardColumn[]>>(`${API_ENDPOINTS.BOARDS}/${boardId}/columns/reorder`, { columnIds });
  }

  getSwimlanes(boardId: string): Observable<ApiResponse<BoardSwimlane[]>> {
    return this.api.get<ApiResponse<BoardSwimlane[]>>(`${API_ENDPOINTS.BOARDS}/${boardId}/swimlanes`);
  }
}
