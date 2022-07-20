import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return(
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />

      <Input 
        placeholder='Número do patrimõnio'
        mt={4}
      />
      <Input 
        placeholder="Descrição do problema"
        mt={5}
        flex={1}
        textAlignVertical="top"
        multiline
      />

      <Button title='Cadastrar' mt={5} />
    </VStack>
  );
}