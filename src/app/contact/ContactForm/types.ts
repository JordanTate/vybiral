export type HandleSubmitOutput =
  | {
      errors?: {
        errors?: string[];
        properties?:
          | {
              name?:
                | {
                    errors?: string[];
                  }
                | undefined;
              email?:
                | {
                    errors?: string[];
                  }
                | undefined;
              message?:
                | {
                    errors?: string[];
                  }
                | undefined;
            }
          | undefined;
      };
      values?: {
        name: string;
        email: string;
        message: string;
      };
      success?: undefined;
    }
  | {
      errors?: undefined;
      values?: undefined;
      success: boolean;
    }
  | null;
