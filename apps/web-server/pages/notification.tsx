import { Notification } from '@mel-services-logistiques/models';
import { NotificationComponent } from '@mel-services-logistiques/shared-components';

/* eslint-disable-next-line */
export interface NotificationProps {
  [key: string]: unknown;
}



/**
 * The Notification web-page.
 * @param props The supported property for this page.
 * @returns The Notification page as jsx element.
 */
function NotificationPage(props: NotificationProps): React.ReactElement {

  const notifications: Notification[] = [
    {
      id: 0,
      title: 'Declaration Recue',
      description: 'Salut user2! \nVotre colis Pk-A45 est bien arrivee dans notre agence. \nVeuillez selectionnez un mode de livraison.',
    },
    {
      id: 1,
      title: 'Collis Recue',
      description: 'Mr John Doe, votre colis a bien ete recue. Selectionner l\'action a effectuer',
      action_json: '{"route": "mode_livraison"}'
    },
  ];
  return <NotificationComponent notifications={notifications}></NotificationComponent>;
}

export default NotificationPage;
