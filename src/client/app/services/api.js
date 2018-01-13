// Using MD5 hashing to prevent password leakage
import MD5 from 'crypto-js/md5'

export const signUp = async (username, pass, firstName, lastName) => {
  const urlString = 'http://localhost:3000/users' + '?username=' + username + '&hash=' + MD5(pass) + '&firstName=' + firstName + '&lastName=' + lastName
  try {
    return await window.fetch(urlString, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username, pass, firstName, lastName })
    })
  } catch (error) {
    return error.toString()
  }
}

export const logIn = async (username, pass) => {
  const urlString = 'http://localhost:3000/login' + '?username=' + username + '&hash=' + MD5(pass)
  try {
    return await window.fetch(urlString, {
      method: 'post'
    })
  } catch (error) {
    return error.toString()
  }
}

export const getUsers = async (username, pass) => {
  try {
    return await window.fetch('http://localhost:3000/users', {
      method: 'get'
    })
  } catch (error) {
    console.log(error.toString())
  }
}
