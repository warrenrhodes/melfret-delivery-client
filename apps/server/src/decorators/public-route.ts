
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_ROUTE_KEY = 'isPublicRoute';

/**
 * The decorator that bypass our auth strategy.
 * @returns true if the route is a public route.
 */
export const PublicRoute = (): unknown => SetMetadata(IS_PUBLIC_ROUTE_KEY, true);