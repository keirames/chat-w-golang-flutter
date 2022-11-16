import { useAtom } from 'jotai';
import React from 'react';
import { ListRenderItemInfo, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { messagesAtom } from './atoms';
import { Message } from './message';
import { Message as IMessage } from './types';

export const MessageContainer = () => {
  const [messages] = useAtom(messagesAtom);

  const renderRow = (info: ListRenderItemInfo<IMessage>) => {
    const { index, item } = info;

    const previousMessage: IMessage | undefined = messages[index - 1];

    return (
      <Message
        previousMessage={previousMessage}
        currentMessage={messages[index]}
      />
    );
  };

  return (
    <FlatList
      inverted
      showsVerticalScrollIndicator={false}
      data={messages.reverse()}
      renderItem={renderRow}
      keyExtractor={(item) => item.id}
    />
  );
};