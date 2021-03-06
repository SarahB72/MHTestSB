/* eslint-disable max-statements */
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { add, format } from "date-fns";
import { Button } from "./button";

import {
  AccountHeadline,
  AccountLabel,
  AccountSection,
  AccountList,
  InfoText,
  Inset,
  RowContainer,
} from "./style";

const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

const Detail = ({ }) => {
  // const [account, setAccount] = useState([]);
  // console.log("account", account)
  //
  // useEffect(() => {
  //   window
  //     .fetch("http://localhost:3333/api/account")
  //     .then((res) => res.json())
  //     .then((result) => setAccount(result.account))
  //     .then(console.log)
  // }, []);

  const purchasePrice = account.originalPurchasePrice;
  const purchaseDate = account.originalPurchasePriceDate;

  const sincePurchaseValue = account.recentValuation?.amount - purchasePrice;
  const sincePurchasePercentage = (sincePurchaseValue / purchasePrice) * 100;

  const purchaseMonth = new Date(purchaseDate).toLocaleString('default', { month: 'long' });
  const purchaseYear = new Date(purchaseDate).getFullYear();
  const currentYear = new Date().getFullYear();
  const yearsSincePurchase = currentYear - purchaseYear;
  const annualAppreciation = sincePurchasePercentage / yearsSincePurchase;

  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages?.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(account.recentValuation?.amount)}
        </AccountHeadline>
        <AccountList>
          <InfoText>
            {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
          </InfoText>
          <InfoText>
            {`Next update ${format(
              add(lastUpdate, { days: account.updateAfterDays }),
              "do MMM yyyy"
            )}`}
          </InfoText>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <InfoText>{account.name}</InfoText>
            <InfoText>{account.bankName}</InfoText>
            <InfoText>{account.postcode}</InfoText>
          </AccountList>
        </RowContainer>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Valuation Changes</AccountLabel>
        <RowContainer>
          <AccountList>
            <InfoText>
              <p>
                Purchased for &nbsp;
                <strong>{new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                  maximumSignificantDigits: 3,
                }).format(
                  Math.abs(purchasePrice)
                )}&nbsp;</strong> in {purchaseMonth} {purchaseYear}
              </p>
            </InfoText>
            <InfoText>
              <p>Since purchase</p>
              <p>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                  maximumSignificantDigits: 3
                }).format(
                  Math.abs(sincePurchaseValue)
                ) + ` (` + `${sincePurchasePercentage}` + `%)`}
              </p>
            </InfoText>
            <InfoText>
              <p>Annual appreciation</p>
              <p>{annualAppreciation}%</p>
            </InfoText>
          </AccountList>
        </RowContainer>
      </AccountSection>
      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <InfoText>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  Math.abs(account.associatedMortgages[0].currentBalance)
                )}
              </InfoText>
              <InfoText>{account.associatedMortgages[0].name}</InfoText>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
