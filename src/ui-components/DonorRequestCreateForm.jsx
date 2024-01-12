/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createDonorRequest } from "../graphql/mutations";
const client = generateClient();
export default function DonorRequestCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    phone: "",
    name: "",
    age: "",
    fever: "",
    bloodType: "",
    adminApproval: false,
  };
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [name, setName] = React.useState(initialValues.name);
  const [age, setAge] = React.useState(initialValues.age);
  const [fever, setFever] = React.useState(initialValues.fever);
  const [bloodType, setBloodType] = React.useState(initialValues.bloodType);
  const [adminApproval, setAdminApproval] = React.useState(
    initialValues.adminApproval
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPhone(initialValues.phone);
    setName(initialValues.name);
    setAge(initialValues.age);
    setFever(initialValues.fever);
    setBloodType(initialValues.bloodType);
    setAdminApproval(initialValues.adminApproval);
    setErrors({});
  };
  const validations = {
    phone: [],
    name: [],
    age: [{ type: "Required" }],
    fever: [{ type: "Required" }],
    bloodType: [{ type: "Required" }],
    adminApproval: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          phone,
          name,
          age,
          fever,
          bloodType,
          adminApproval,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createDonorRequest.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DonorRequestCreateForm")}
      {...rest}
    >
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={phone}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              phone: value,
              name,
              age,
              fever,
              bloodType,
              adminApproval,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone,
              name: value,
              age,
              fever,
              bloodType,
              adminApproval,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              phone,
              name,
              age: value,
              fever,
              bloodType,
              adminApproval,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Fever"
        isRequired={true}
        isReadOnly={false}
        value={fever}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone,
              name,
              age,
              fever: value,
              bloodType,
              adminApproval,
            };
            const result = onChange(modelFields);
            value = result?.fever ?? value;
          }
          if (errors.fever?.hasError) {
            runValidationTasks("fever", value);
          }
          setFever(value);
        }}
        onBlur={() => runValidationTasks("fever", fever)}
        errorMessage={errors.fever?.errorMessage}
        hasError={errors.fever?.hasError}
        {...getOverrideProps(overrides, "fever")}
      ></TextField>
      <TextField
        label="Blood type"
        isRequired={true}
        isReadOnly={false}
        value={bloodType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phone,
              name,
              age,
              fever,
              bloodType: value,
              adminApproval,
            };
            const result = onChange(modelFields);
            value = result?.bloodType ?? value;
          }
          if (errors.bloodType?.hasError) {
            runValidationTasks("bloodType", value);
          }
          setBloodType(value);
        }}
        onBlur={() => runValidationTasks("bloodType", bloodType)}
        errorMessage={errors.bloodType?.errorMessage}
        hasError={errors.bloodType?.hasError}
        {...getOverrideProps(overrides, "bloodType")}
      ></TextField>
      <SwitchField
        label="Admin approval"
        defaultChecked={false}
        isDisabled={false}
        isChecked={adminApproval}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              phone,
              name,
              age,
              fever,
              bloodType,
              adminApproval: value,
            };
            const result = onChange(modelFields);
            value = result?.adminApproval ?? value;
          }
          if (errors.adminApproval?.hasError) {
            runValidationTasks("adminApproval", value);
          }
          setAdminApproval(value);
        }}
        onBlur={() => runValidationTasks("adminApproval", adminApproval)}
        errorMessage={errors.adminApproval?.errorMessage}
        hasError={errors.adminApproval?.hasError}
        {...getOverrideProps(overrides, "adminApproval")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
