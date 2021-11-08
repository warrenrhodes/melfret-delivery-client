import { ArrowRight } from '@emotion-icons/feather';
import styled from '@emotion/native';
import { Notification } from '@mel-services-logistiques/models';
import { CONST } from '@mel-services-logistiques/view-utils';
import React from 'react';
import { ListRenderItemInfo } from 'react-native';

const BackgroundContainer = styled.View`
  background-color: ${CONST.ColorBlue};
`;

const Header = styled.View`
  height: 80px;
  padding: 25px;
  border-bottom-width: 2px;
  border-bottom-color: ${CONST.ColorWhite};
`;

const Title = styled.Text`
  color: ${CONST.ColorWhite};
  font-size: 25px;
  position: relative;
`;

const Badge = styled.Text`
  color: #333;
  padding: 5px;
  font-size: 10px;
  border-radius: 5px;
  background-color: ${CONST.ColorWhite};
  position: absolute;
  top: 0px;
`;

const NotificationFlatList = styled.FlatList`
  padding: 35px;
`;

const NotificationItem = styled.View`
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px ${CONST.ColorWhite};
  background: ${CONST.ColorWhite};
  min-height: 126px;
  min-width: 246px;
`;

const NotificationItemTitle = styled(Title)`
  color: ${CONST.ColorDark};
  font-size: 17px;
  line-height: 22px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
`;

const NotificationItemDescription = styled.Text`
  color: ${CONST.ColorDark};
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
`;

const ActionIcon = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export interface NotificationItemProps {
  notification: Notification;
}

export interface NotificationProps {
  notifications: Notification[];
  [key: string]: unknown;
}

/**
 * The Notification item component.
 * @param props The supported property for this Notification element.
 * @returns The Notification component as jsx element.
 */
export function NotificationItemComponent(props: NotificationItemProps): React.ReactElement {
  return (
    <NotificationItem>
      <NotificationItemTitle>{props.notification.title}</NotificationItemTitle>
      <NotificationItemDescription>{props.notification.description}</NotificationItemDescription>
      <ActionIcon >
         <ArrowRight size="36" color={CONST.ColorDark}/>
      </ActionIcon>
    </NotificationItem>
  );
}

/**
* The Notification component.
* @param props The supported property for this Notification element.
* @returns The Notification component as jsx element.
*/
export function NotificationComponent(props: NotificationProps): React.ReactElement {
  return (
    <BackgroundContainer>
      <Header>
        <Title>
          Notifications<Badge>+99 Non Lu</Badge>
        </Title>
      </Header>
      <NotificationFlatList data={props.notifications}
                            renderItem={renderItem}
                            keyExtractor={(item): string => `${(item as Notification).id}`}>
      </NotificationFlatList>
    </BackgroundContainer>
  );
}


/**
 * The helper that return a  menu item for each render.
 * @param e The notification to pass.
 * @returns A react component
 */
function renderItem(e: ListRenderItemInfo<unknown>): React.ReactElement {
  return (<NotificationItemComponent notification={e.item as Notification} />);
}
export default NotificationComponent;
