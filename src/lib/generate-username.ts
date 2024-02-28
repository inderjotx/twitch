import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

const customConfig: Config = {
    dictionaries: [colors, adjectives,],
    separator: '-',
    length: 2,
};


export const getUsername = (name: string) => {

    const firstName = name.split(' ')[0]
    const randomName = uniqueNamesGenerator(customConfig)
    const uniqueUsername = `${firstName}-${randomName}`
    return uniqueUsername
}