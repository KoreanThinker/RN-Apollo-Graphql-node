import React, { useState } from 'react'
import { View, Text, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import { useQuery } from '@apollo/react-hooks';
import { GET_HELLO } from '../../component/Querys';

const HomeScreen = () => {

    const [num, setNum] = useState(0)

    const { loading, error, data, refetch } = useQuery(GET_HELLO, {
        variables: {
            name: `${num}`
        }
    })

    if (loading) return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator /></View>
    if (error) return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <TouchableWithoutFeedback onPress={() => refetch({ name: 'asdf' })}>
            <Text>오류</Text>
        </TouchableWithoutFeedback>
    </View>

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{data.hello}</Text>
            <TouchableWithoutFeedback onPress={() => {
                refetch({ name: 'asdfasgas' })
            }}>
                <Text>reload</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                setNum(num + 1)
                refetch()
            }}>
                <Text>add</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default HomeScreen
