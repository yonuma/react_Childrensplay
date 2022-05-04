import { useCallback } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'

export const ClickReset = (props) => {
    const { setNum, children } = props;
    const onClickReset = useCallback(() => {
        setNum(0);
      });
      return(
          <>
          <Button colorScheme='teal' onClick={onClickReset}>{children}</Button>
          </>
      );
};