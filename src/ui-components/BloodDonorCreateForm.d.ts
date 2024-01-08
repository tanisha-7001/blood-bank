/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BloodDonorCreateFormInputValues = {
    name?: string;
    bloodType?: string;
};
export declare type BloodDonorCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    bloodType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BloodDonorCreateFormOverridesProps = {
    BloodDonorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    bloodType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BloodDonorCreateFormProps = React.PropsWithChildren<{
    overrides?: BloodDonorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BloodDonorCreateFormInputValues) => BloodDonorCreateFormInputValues;
    onSuccess?: (fields: BloodDonorCreateFormInputValues) => void;
    onError?: (fields: BloodDonorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BloodDonorCreateFormInputValues) => BloodDonorCreateFormInputValues;
    onValidate?: BloodDonorCreateFormValidationValues;
} & React.CSSProperties>;
export default function BloodDonorCreateForm(props: BloodDonorCreateFormProps): React.ReactElement;
