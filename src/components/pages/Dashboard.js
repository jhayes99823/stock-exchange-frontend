import React from 'react';
import Online from 'components/templates/Online';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Dashboard = () => (
  <Online>
    <Wrapper>
      <h1>Dashboard - template</h1>
    </Wrapper>
  </Online>
);

export default Dashboard;
