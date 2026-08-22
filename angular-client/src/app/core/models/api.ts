import { HttpHeaders, HttpParams } from '@angular/common/http';

export type QueryParamValue = string | number | boolean | null | undefined | ReadonlyArray<string | number | boolean>;

export interface RequestOptions {
  headers?: HttpHeaders | Record<string, string | string[]>;
  params?: HttpParams | Record<string, QueryParamValue>;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export function buildHttpParams(params?: Record<string, QueryParamValue>): HttpParams {
  let httpParams = new HttpParams();
  if (!params) {
    return httpParams;
  }

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          if (val !== undefined && val !== null) {
            httpParams = httpParams.append(key, String(val));
          }
        });
      } else {
        httpParams = httpParams.set(key, String(value));
      }
    }
  });

  return httpParams;
}
