import { Button } from './Button.styled';
import { Box } from 'components/Box';

export const Btn = ({ onClick }) => {
  return (
    <Box width="100%" textAlign="center" my="10px">
      <Button onClick={onClick}>Load more</Button>
    </Box>
  );
};
