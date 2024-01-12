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
export declare type DonorRequestUpdateFormInputValues = {
    phone?: number;
    name?: string;
    age?: number;
    fever?: string;
    bloodType?: string;
    adminApproval?: boolean;
};
export declare type DonorRequestUpdateFormValidationValues = {
    phone?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    fever?: ValidationFunction<string>;
    bloodType?: ValidationFunction<string>;
    adminApproval?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonorRequestUpdateFormOverridesProps = {
    DonorRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    fever?: PrimitiveOverrideProps<TextFieldProps>;
    bloodType?: PrimitiveOverrideProps<TextFieldProps>;
    adminApproval?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type DonorRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: DonorRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    donorRequest?: any;
    onSubmit?: (fields: DonorRequestUpdateFormInputValues) => DonorRequestUpdateFormInputValues;
    onSuccess?: (fields: DonorRequestUpdateFormInputValues) => void;
    onError?: (fields: DonorRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DonorRequestUpdateFormInputValues) => DonorRequestUpdateFormInputValues;
    onValidate?: DonorRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DonorRequestUpdateForm(props: DonorRequestUpdateFormProps): React.ReactElement;
