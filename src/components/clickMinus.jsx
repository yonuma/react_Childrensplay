import { Button, ButtonGroup } from '@chakra-ui/react'
export const ClickMinus = (props) => {
    const { setNum, children } = props;
    const onClickMinus = () => {
        setNum((num) => num - 1);
      }
    return(
        <>
        <Button colorScheme='red' onClick={onClickMinus}>{children}</Button>
        </>
    );
};