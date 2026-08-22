import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestOptions, QueryParamValue, buildHttpParams } from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private readonly http = inject(HttpClient);

  /**
   * Perform HTTP GET request
   */
  get<T>(endpoint: string, options?: RequestOptions): Observable<T> {
    const params = this.formatParams(options?.params);
    const headers = this.formatHeaders(options?.headers);
    return this.http.get<T>(endpoint, {
      params,
      headers,
      reportProgress: options?.reportProgress,
      withCredentials: options?.withCredentials,
    });
  }

  /**
   * Perform HTTP POST request
   */
  post<TResponse = unknown, TRequest = unknown>(endpoint: string, body?: TRequest, options?: RequestOptions): Observable<TResponse> {
    const params = this.formatParams(options?.params);
    const headers = this.formatHeaders(options?.headers);
    return this.http.post<TResponse>(endpoint, body ?? null, {
      params,
      headers,
      reportProgress: options?.reportProgress,
      withCredentials: options?.withCredentials,
    });
  }

  /**
   * Perform HTTP PUT request
   */
  put<TResponse = unknown, TRequest = unknown>(endpoint: string, body?: TRequest, options?: RequestOptions): Observable<TResponse> {
    const params = this.formatParams(options?.params);
    const headers = this.formatHeaders(options?.headers);
    return this.http.put<TResponse>(endpoint, body ?? null, {
      params,
      headers,
      reportProgress: options?.reportProgress,
      withCredentials: options?.withCredentials,
    });
  }

  /**
   * Perform HTTP PATCH request
   */
  patch<TResponse = unknown, TRequest = unknown>(endpoint: string, body?: TRequest, options?: RequestOptions): Observable<TResponse> {
    const params = this.formatParams(options?.params);
    const headers = this.formatHeaders(options?.headers);
    return this.http.patch<TResponse>(endpoint, body ?? null, {
      params,
      headers,
      reportProgress: options?.reportProgress,
      withCredentials: options?.withCredentials,
    });
  }

  /**
   * Perform HTTP DELETE request
   */
  delete<T>(endpoint: string, options?: RequestOptions): Observable<T> {
    const params = this.formatParams(options?.params);
    const headers = this.formatHeaders(options?.headers);
    return this.http.delete<T>(endpoint, {
      params,
      headers,
      reportProgress: options?.reportProgress,
      withCredentials: options?.withCredentials,
    });
  }

  private formatParams(params?: HttpParams | Record<string, QueryParamValue>): HttpParams | undefined {
    if (!params) return undefined;
    if (params instanceof HttpParams) return params;
    return buildHttpParams(params);
  }

  private formatHeaders(headers?: HttpHeaders | Record<string, string | string[]>): HttpHeaders | undefined {
    if (!headers) return undefined;
    if (headers instanceof HttpHeaders) return headers;
    let httpHeaders = new HttpHeaders();
    Object.entries(headers).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          httpHeaders = httpHeaders.append(key, v);
        });
      } else if (value !== undefined && value !== null) {
        httpHeaders = httpHeaders.set(key, String(value));
      }
    });
    return httpHeaders;
  }
}
