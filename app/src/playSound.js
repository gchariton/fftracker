import { Audio } from 'expo-av';

const soundFiles = {
    soundAccept: require('../sounds/soundAccept.wav'),
    soundError: require('../sounds/soundError.mp3'),
    soundDelete: require('../sounds/soundDelete.wav'),
};

export async function playSound(soundType) {
    const { sound } = await Audio.Sound.createAsync(soundFiles[soundType]);
    await sound.playAsync();
    return sound;
}
