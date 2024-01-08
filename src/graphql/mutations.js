/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addBloodDonor = /* GraphQL */ `
  mutation AddBloodDonor(
    $name: String!
    $bloodType: String!
    $contactNumber: String!
    $location: String!
  ) {
    addBloodDonor(
      name: $name
      bloodType: $bloodType
      contactNumber: $contactNumber
      location: $location
    ) {
      id
      name
      bloodType
      contactNumber
      location
      units
      __typename
    }
  }
`;
