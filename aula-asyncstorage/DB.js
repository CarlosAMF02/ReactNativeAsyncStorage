import AsyncStorage from '@react-native-async-storage/async-storage'

const insertString = async (key, value, callback = null) => {
  try {
    await AsyncStorage.setItem(key, value, callback);
  } catch ( e ) {
    throw new Error('Não foi possível salvar a string na chave '+key);
  }
}

const insertObject = async (key, value, callback = null) => {
  try {
    const objeto = JSON.stringify(value);
    await AsyncStorage.setItem(key, objeto, callback);
  } catch ( e ) {
    throw new Error('Não foi possível salvar o objeto na chave '+key);
  }
}

const read = async (key, callback = null) => {
  try {
    await AsyncStorage.getItem(key, callback);
  } catch ( e ) {
    throw new Error('Não foi possível buscar a informação na chave '+key)
  }
}

const allKeys = async (callback = null) => {
  try {
    await AsyncStorage.getAllKeys(callback);
  } catch ( e ) {
    throw new Error('Não foi possível retornar todas as chaves armazenadas!')
  }
}

const remove = async (key, callback = null) => {
  try {
    await AsyncStorage.removeItem(key, callback);
  } catch ( e ) {
    throw new Error('Não foi possível excluir o valor da chave '+key)
  }
}

export { insertString, insertObject, read, allKeys, remove }



