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
export declare type BloodDonorUpdateFormInputValues = {
    name?: string;
    bloodType?: string;
};
export declare type BloodDonorUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    bloodType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BloodDonorUpdateFormOverridesProps = {
    BloodDonorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    bloodType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BloodDonorUpdateFormProps = React.PropsWithChildren<{
    overrides?: BloodDonorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bloodDonor?: any;
    onSubmit?: (fields: BloodDonorUpdateFormInputValues) => BloodDonorUpdateFormInputValues;
    onSuccess?: (fields: BloodDonorUpdateFormInputValues) => void;
    onError?: (fields: BloodDonorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BloodDonorUpdateFormInputValues) => BloodDonorUpdateFormInputValues;
    onValidate?: BloodDonorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BloodDonorUpdateForm(props: BloodDonorUpdateFormProps): React.ReactElement;
