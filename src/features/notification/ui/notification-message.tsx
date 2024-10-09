import { useEffect, useRef } from 'react';
import { Button } from '@nextui-org/button';

import { INotification } from '../model/notification.type';
import { useNotification } from '../model/notification-store';
import { NotificationIcons } from '../config/icons';

import { Fader } from '@/src/shared/ui/layouts/fader';

export const NotificationMassage = ({ text, type, duration = 3000, id }: INotification) => {
  const { closeNotificationById } = useNotification();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const close = () => {
    closeNotificationById(id);
  };

  useEffect(() => {
    if (duration) {
      timerRef.current = setTimeout(() => {
        close();
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Fader>
      <Button
        className='px-12 py-6 !text-white mb-2 data-[hover=true]:opacity-100 border-box text-wrap leading-5 rounded-2xl font-medium'
        color={type}
        variant='shadow'
        onPress={close}
      >
        {NotificationIcons[type || 'default']}
        {text}
      </Button>
    </Fader>
  );
};
