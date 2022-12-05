import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useRoomStore } from './use-room-store';
import { useSendMessage } from './use-send-message';

export const InputToolbar = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [rowHeight, setRowHeight] = useState(1);

  const mutation = useSendMessage();

  const roomId = useRoomStore((state) => state.roomId);

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (e.metaKey || e.ctrlKey || e.altKey) {
        setInputVal((prev) => prev.concat('\n'));
        return;
      }

      setInputVal('');
      handleSend();
    }
  };

  const handleClickIcon: React.MouseEventHandler<SVGElement> = (e) => {
    setInputVal('');
    handleSend();
  };

  const handleSend = () => {
    if (!roomId || inputVal.length === 0) return;

    mutation.mutate({ input: { roomId, text: inputVal } });
  };

  return (
    <div className="flex w-full flex-1 items-center justify-center p-4">
      <ReactTextareaAutosize
        value={inputVal}
        placeholder="Aa"
        minRows={1}
        maxRows={6}
        className="w-full resize-none rounded-3xl border-transparent bg-gray-100 px-4 py-2 focus:outline-none"
        onChange={(e) => setInputVal(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        onHeightChange={(h) => {
          setRowHeight(h);
        }}
      />
      <div className="ml-4 h-full w-[30px] p-1">
        {inputVal.length !== 0 && (
          <IoSend
            className="h-full w-full cursor-pointer text-blue-600"
            onClick={handleClickIcon}
          />
        )}
      </div>
    </div>
  );
};
