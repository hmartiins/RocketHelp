import { useState } from 'react';
import { 
  HStack, 
  IconButton, 
  VStack,
  Text,
  Heading,
  FlatList,
  useTheme, 
  Center
} from "native-base";
import { SignOut, ChatTeardropText } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg';

import { Button } from "../components/Button";
import { Filter } from "../components/Filter";
import { Order, OrderPorps } from "../components/Order";
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderPorps[]>([
    {
      id: '1',
      patrimony: '123',
      when: '18/07/2022 às 22:00',
      status: 'open'
    },
    {
      id: '2',
      patrimony: '123',
      when: '18/07/2022 às 22:00',
      status: 'open'
    },
    {
      id: '3',
      patrimony: '123',
      when: '18/07/2022 às 22:00',
      status: 'open'
    },
    {
      id: '4',
      patrimony: '123',
      when: '18/07/2022 às 22:00',
      status: 'closed'
    },
  ]);

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId });
  }

  return(
    <VStack flex={1} pb={6} bg="gray.700" >
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton 
          icon={<SignOut color={colors.gray[600]} size={26} />}
        />
        
      </HStack>

      <VStack flex={1} px={6}>
        <HStack 
          w="full" 
          mt={8} 
          mb={4} 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Heading color="gray.100">
            Meus Chamados
          </Heading>

          <Text color="gray.200">
            {orders.length}
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter 
            type="open"
            title="Em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected == 'open'}
          />

          <Filter 
            type="closed"
            title="Finalizados"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected == 'closed'}
          />
        </HStack>

        <FlatList 
          data={orders}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => 
              <Order data={item} onPress={() => handleOpenDetails(item.id)} />
          }
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 80 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações {statusSelected == 'open' ? 'em andamento' : 'finalizadas'}  
              </Text>
            </Center>
          )}
        />

        <Button  onPress={handleNewOrder} title="Nova Solicitação" />
      </VStack>

    </VStack>
  );
}