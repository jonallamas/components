import { ReactNode } from 'react';

export interface InputProps {
  placeholder: string;
  value?: string;
  type?: 'text' | 'password' | 'number' | 'email';
  id?: string;
  name?: string;
  status?: 'success' | 'error';
  autoFocus?: boolean;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  isLoading?: boolean;
  isChecked?: boolean;
  isError?: boolean;
  disabled?: boolean;
}

export interface InputPrimitiveProps {
  $isSuccess?: boolean;
  $showValidate?: boolean;
}

export interface FeedbackProps {
  children: ReactNode;
  status?: null | 'success' | 'error';
  show?: boolean;
}

export interface FeedbackPrimitiveProps {
  $isShow: boolean;
  $isSuccess: boolean;
}
