import {Router} from 'express';

// Singleton router class
export class AppRouter {
  private static instance: Router;

  static getInstance(): Router {
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }

    return AppRouter.instance;
  }
}