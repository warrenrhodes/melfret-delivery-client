import { Notification } from '@mel-services-logistiques/models';
import { NotificationComponent } from '@mel-services-logistiques/shared-components';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';



/**
 * The main component of our mobile application.
 * @returns a jsx element.
 */
const App = (): React.ReactElement => {
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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NotificationComponent notifications={notifications}></NotificationComponent>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    backgroundColor: '#143055',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  logo: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  link: {
    color: '#45bc98',
  },
  githubStarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  githubStarBadge: {
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontWeight: '600',
  },
});

export default App;
