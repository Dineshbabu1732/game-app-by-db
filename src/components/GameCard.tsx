import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { Game } from '../hooks/useGames';

interface Props {
    game:Game;
}

const GameCard = ({game}:Props) => {
  return (
    <Card >
      <Image src={game.background_image} objectFit="cover" />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard