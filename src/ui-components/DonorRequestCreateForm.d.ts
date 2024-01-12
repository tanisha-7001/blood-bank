/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DonorRequestCreateFormInputValues = {
    phone?: number;
    name?: string;
    age?: number;
    fever?: string;
    bloodType?: string;
    adminApproval?: boolean;
};
export declare type DonorRequestCreateFormValidationValues = {
    phone?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    fever?: ValidationFunction<string>;
    bloodType?: ValidationFunction<string>;
    adminApproval?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonorRequestCreateFormOverridesProps = {
    DonorRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    fever?: PrimitiveOverrideProps<TextFieldProps>;
    bloodType?: PrimitiveOverrideProps<TextFieldProps>;
    adminApproval?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type DonorRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: DonorRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DonorRequestCreateFormInputValues) => DonorRequestCreateFormInputValues;
    onSuccess?: (fields: DonorRequestCreateFormInputValues) => void;
    onError?: (fields: DonorRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DonorRequestCreateFormInputValues) => DonorRequestCreateFormInputValues;
    onValidate?: DonorRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function DonorRequestCreateForm(props: DonorRequestCreateFormProps): React.ReactElement;
