import { Button, ButtonGroup } from '@chakra-ui/react'
export const ClickPlus = (props) => {
    const { setNum, children } = props;
    const onClickPlus = () => {
        setNum((num) => num + 1);
      }
      return(
          <>
          <Button colorScheme='blue' onClick={onClickPlus}>{children}</Button>
          </>
      );
};