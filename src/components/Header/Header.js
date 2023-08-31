import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../Header/lock.svg';

const Header = () => {
  return (
    <>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' marginLeft={450} />
      <Heading color='blue.600' marginBottom='1rem' textAlign='center' marginLeft={100}>
        Password Generator Application
      </Heading>
      <Text fontSize={25} textAlign='center' marginLeft={100}>
        Generate High Securable Password.
      </Text>
      <Text fontSize={25} textAlign='center' marginLeft={100}>
        Fortify Your Digital Defense: Next-Gen Password Generator App.
      </Text>
    </>
  );
};

export default Header;