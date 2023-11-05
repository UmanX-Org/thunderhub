import React, { useState } from 'react';
import { SmallSelectWithValue } from '../../../../components/select';
import styled from 'styled-components';
import {
  CardWithTitle,
  SubTitle,
  Card,
  CardTitle,
} from '../../../../components/generic/Styled';
import { mediaWidths } from '../../../../styles/Themes';
import { ForwardChannelsReport } from './ForwardChannelReport';
import { ForwardResume } from './ForwardResume';
import { ForwardsGraph } from './ForwardsGraph';

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 0 16px;

  @media (${mediaWidths.mobile}) {
    padding: 0 8px;
  }
`;

const S = {
  row: styled.div`
    width: 100%;
    display: grid;
    column-gap: 16px;
    grid-template-columns: 1fr 70px 90px;
    margin-bottom: 8px;
  `,
};

export const options = [
  { label: '1D', value: 1 },
  { label: '7D', value: 7 },
  { label: '1M', value: 30 },
  { label: '2M', value: 60 },
  { label: '6M', value: 180 },
];

export const typeOptions = [
  { label: 'Count', value: 'count' },
  { label: 'Amount', value: 'tokens' },
  { label: 'Fees', value: 'fee' },
];

export const ForwardBox = () => {
  const [days, setDays] = useState(options[0]);
  const [type, setType] = useState(typeOptions[0]);

  return (
    <CardWithTitle>
      <CardTitle>
        <S.row>
          <SubTitle>Forward Report</SubTitle>
          <SmallSelectWithValue
            callback={e => setDays((e[0] || options[1]) as any)}
            options={options}
            value={days}
            isClearable={false}
          />
          <SmallSelectWithValue
            callback={e => setType((e[0] || typeOptions[1]) as any)}
            options={typeOptions}
            value={type}
            isClearable={false}
          />
        </S.row>
      </CardTitle>
      <Card mobileCardPadding={'8px'}>
        <ForwardResume type={type} />
      </Card>
      <Card mobileCardPadding={'8px'}>
        <ForwardsGraph days={days} type={type} />
        <ForwardChannelsReport days={days.value} />
      </Card>
    </CardWithTitle>
  );
};
