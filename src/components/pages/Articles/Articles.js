import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import User from 'components/templates/User/User';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Card from 'components/molecules/Card/Card';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Articles = ({ articles }) => (
  <User>
    <Wrapper>
      <Header>
        Your articles [{articles.length}]
      </Header>
      <Paragraph>Find by title:</Paragraph>
      <Input search />
      <Board>
        {articles.map(({
          id, title, description, created, link,
        }) => (
          <Card
            type="articles"
            id={id}
            title={title}
            description={description}
            created={created}
            link={link}
          />
        ))}
      </Board>
    </Wrapper>
  </User>
);

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
