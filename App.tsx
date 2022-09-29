import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

const {width, height} = Dimensions.get('screen')
const WIDTH = width
const HEIGHT = height

export default function App() {
    const [valueLogin, setValueLogin] = useState<string>('')
    const [valuePassword, setValuePassword] = useState<string>('')

    return (
        <View style={styles.container}>

            <Image style={styles.mainBackground}
                   source={require('./img/background.jpeg')}
            />
            <Image style={styles.backgroundCity}
                   source={require('./img/city.jpeg')}
            />
            <View style={styles.containerLogin}>

                <Text style={styles.loginName}>
                    Login
                </Text>
                <Text style={styles.loginText}>T
                    o log in get registered here
                    or use common test account credentials:
                </Text>
                <Text style={styles.loginTextEmail}>
                    Email: <Text style={styles.loginEmailPasswordFreeText}>free@samuraijs.com</Text>
                </Text>
                <Text style={styles.loginTextPassword}>
                    Password: <Text style={styles.loginEmailPasswordFreeText}>free</Text>
                </Text>

                <View>
                    <TextInput
                        style={styles.inputLoginPassword}
                        value={valueLogin}
                        onChangeText={setValueLogin}
                        placeholder={'Username'}
                    />
                    <TextInput
                        style={[styles.inputLoginPassword, /*{backgroundColor: value ? 'rgba(255,255,255,0.2)' : ''}*/]}
                        value={valuePassword}
                        onChangeText={setValuePassword}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.btnSignIn}>
                        <Text style={styles.textBtnSignIn}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //background
    backgroundCity: {
        width: "100%",
        height: '100%',
        flex: 1,
        position: 'absolute',
    },
    mainBackground: {
        width: "100%",
        height: '100%',
        zIndex: 1,
        opacity: .7,
        position: 'absolute',
    },

    //Login
    containerLogin: {
        zIndex: 2,
        height: '80%',
    },

    //Text
    loginName: {
        fontSize: 42,
        textAlign: "center",
        color: 'white'
    },
    loginText: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        color: 'white',
        fontSize: 20,
        lineHeight: 30
    },
    loginTextEmail: {
        fontSize: 24,
        color: 'white',
        marginHorizontal: 20,
        marginVertical: 20
    },
    loginEmailPasswordFreeText: {
        color: "#03e9f4",
    },
    loginTextPassword: {
        fontSize: 24,
        color: 'white',
        marginHorizontal: 20,
    },

    //input
    inputLoginPassword: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 24,
        borderBottomWidth: 3,
        borderColor: 'white',
        color: 'white',
    },

    //btn
    btnSignIn: {
        marginHorizontal: 30,
        height: 60,
        backgroundColor: 'rgba(46,179,220,0.7)',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderRadius: 10,
    },
    textBtnSignIn: {
        color: 'white',
        fontSize: 25,
    }
});
