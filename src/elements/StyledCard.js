import styled from "styled-components";
import { Card } from "@material-ui/core";
export const StyledCard = styled(Card)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 6rem;
  margin-bottom: 1rem;
  padding: 0.25rem 0;
  border-radius: 1rem;
  background: ${(props) => props.theme.color.main};
  display: flex;
  justify-content: space-around;
  border: 1px solid transparent;
  align-items: center;
`;
