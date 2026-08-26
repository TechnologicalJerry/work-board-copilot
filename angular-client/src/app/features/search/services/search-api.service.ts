import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '@core/api/api-client.service';
import { API_ENDPOINTS } from '@core/api/api-endpoints';
import { ApiResponse } from '@core/api/api-response';
import {
  SearchResultItem,
  GlobalSearchResponse,
  SearchEntityType,
} from '../models/search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchApiService {
  private readonly api = inject(ApiClientService);

  globalSearch(query: string, type?: SearchEntityType, page: number = 1, limit: number = 20): Observable<ApiResponse<GlobalSearchResponse>> {
    const params: Record<string, string> = { q: query, page: String(page), limit: String(limit) };
    if (type && type !== 'global') params['type'] = type;

    return this.api.get<ApiResponse<GlobalSearchResponse>>(`${API_ENDPOINTS.SEARCH}/global`, { params });
  }

  suggest(query: string, type: SearchEntityType = 'global'): Observable<ApiResponse<SearchResultItem[]>> {
    return this.api.get<ApiResponse<SearchResultItem[]>>(`${API_ENDPOINTS.SEARCH}/suggest`, {
      params: { q: query, type },
    });
  }
}
