import { TestBed } from '@angular/core/testing';

import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ErrorInterceptor } from './error-interceptor';

describe('ErrorInterceptor', () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;
  let router: Router;
  let toast: ToastrService;
  const emptyFn = () => {
    // code
  };

  function assertStatus(status: number, statusText: string) {
    spyOn(router, 'navigateByUrl');

    http.get('/user').subscribe(emptyFn, emptyFn, emptyFn);

    httpMock.expectOne('/user').flush({}, { status, statusText });

    expect(router.navigateByUrl).toHaveBeenCalledWith(`/${status}`, {
      skipLocationChange: true,
    });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ToastrModule.forRoot()],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
    router = TestBed.inject(Router);
    toast = TestBed.inject(ToastrService);
  });

  afterEach(() => httpMock.verify());

  it('should handle status code 401', () => {
    spyOn(router, 'navigateByUrl');
    spyOn(toast, 'error');

    http.get('/user').subscribe(emptyFn, emptyFn, emptyFn);
    httpMock
      .expectOne('/user')
      .flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(toast.error).toHaveBeenCalledWith('401 Unauthorized');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/auth/login');
  });

  it('should handle status code 403', () => {
    assertStatus(403, 'Forbidden');
  });

  it('should handle status code 404', () => {
    assertStatus(404, 'Not Found');
  });

  it('should handle status code 500', () => {
    assertStatus(500, 'Internal Server Error');
  });

  it('should handle others status code', () => {
    spyOn(toast, 'error');

    http.get('/user').subscribe(emptyFn, emptyFn, emptyFn);

    httpMock
      .expectOne('/user')
      .flush({}, { status: 504, statusText: 'Gateway Timeout' });

    expect(toast.error).toHaveBeenCalledWith('504 Gateway Timeout');
  });
});
