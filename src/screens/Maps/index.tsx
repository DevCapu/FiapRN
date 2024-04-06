import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {usePermissions} from '@hooks';
import {themeSchema} from '@utils';

const origin = {
  latitude: -23.5640843,
  longitude: -46.6523865,
};
const destination = {
  latitude: -23.6282259,
  longitude: -46.6570446,
};
const GOOGLE_MAPS_APIKEY = 'AIzaSyCFUgUbyUZvues3jTTtFfrZigrXyAQsxVc';

const {colors, fonts} = themeSchema().theme;

export function Maps() {
  const mapRef = useRef<MapView | null>(null);
  const {checkAndRequestLocation} = usePermissions();

  const initialCoords = {
    ...origin,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0021,
  };

  function fitCoords() {
    mapRef.current?.fitToCoordinates([origin, destination], {
      animated: true,
      edgePadding: {top: 200, bottom: 100, right: 20, left: 20},
    });
  }

  function startNavigation() {
    mapRef.current?.animateCamera({
      pitch: 180,
      zoom: 17,
      center: origin,
    });
  }

  useEffect(() => {
    checkAndRequestLocation();
  }, [checkAndRequestLocation]);

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        ref={mapRef}
        provider="google"
        showsBuildings={false}
        style={StyleSheet.absoluteFillObject}
        initialRegion={initialCoords}>
        <Marker coordinate={origin} title="FIAP" />
        <Marker
          coordinate={destination}
          title="Aeroporto de Congonhas"
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={7}
          strokeColor={colors.primary}
        />
      </MapView>
      <TouchableOpacity
        style={styles.centerButton}
        activeOpacity={0.7}
        onPress={fitCoords}>
        <Text style={styles.centerButtonText}>Centralizar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.centerButton,
          {alignSelf: 'flex-start', marginLeft: 20},
        ]}
        activeOpacity={0.7}
        onPress={startNavigation}>
        <Text style={styles.centerButtonText}>Navegar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centerButton: {
    position: 'absolute',
    bottom: 40,
    padding: 10,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  centerButtonText: {
    fontFamily: fonts.RobotoBold,
  },
});
