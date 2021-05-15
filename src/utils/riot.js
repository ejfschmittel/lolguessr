// directly import 

// load json file


const riotChache = {}


const DRAGON_TAIL_VERSION = "/dragontail-11.10.1/11.10.1"

const DATA_URL = process.env.PUBLIC_URL + DRAGON_TAIL_VERSION + "/data/en_US/"
const IMAGE_URL = process.env.PUBLIC_URL + DRAGON_TAIL_VERSION + "/img"



export const DATA_PATHS = {
    CHAMPIONS: "champion.json",
}


export const getData = async (dataPath) => {
    //if(!isValidDataPath(dataPath)) throw new Error(`${dataPath} is not a valid data path.`)
    let data = getFromChache(dataPath)
    if(!data){
        console.log("loading data...")
        data = await loadData(dataPath)
        saveToChache(dataPath, data)
    }
    return data; 
}

const VALID_PATHS = Object.keys(DATA_PATHS).map(key => DATA_PATHS[key])
//const isValidDataPath = (dataPath) => VALID_PATHS.includes(dataPath)


export const loadData = async (path) => {
    const url = DATA_URL + path;
    const response = await fetch(url)
    const json = await response.json();
    return json;
}


export const saveToChache = (dataPath, data) => {
    const keys = dataPath.split("/")
 
    let obj = riotChache;
    for(let i = 0; i < keys.length-1; i++){
        const key = keys[i]
        if (!(key in obj)){
            obj[key] = {}
        } 
        obj = obj[key]
    }
    obj[keys[keys.length-1]] = data;
}

const getFromChache = (dataPath) => {
    const keys = dataPath.split("/")
  
    return keys.reduce((prev, key) => {
        if(!prev) return null;
        if(key in prev) return prev[key]
        return null;
    },riotChache)
} 




export const getAllChampions = async () => {
    const champions = await getData(DATA_PATHS.CHAMPIONS);
    return Object.keys(champions.data).map(key => champions.data[key].id)
}



export const getRandomChampion = async () => {
    const allChampions = await getAllChampions()
    return getRandomArrayItem(allChampions);
}

export const getChampionData = async (championID) => {
    const championData = await getData(`champion/${championID}.json`)
    return championData
}


export const getRandomChampionAbillity = async () => {
    const randomChampion = await getRandomChampionData()
    const abilities = getChampionAbilityList(randomChampion)
    const randomAbility = getRandomArrayItem(abilities)
    return {champion: randomChampion, ability: randomAbility}
}


export const getOddOneOutData = async () => {
    const primaryChampion = await getRandomChampionData()
    let secondaryChampion = null;
    do{ secondaryChampion = await getRandomChampionData(); }while(primaryChampion.id == secondaryChampion.id);

  
    const primaryChampionAbilities = getChampionAbilityList(primaryChampion)
    const secondaryChampionAbilities = getChampionAbilityList(secondaryChampion)

    primaryChampionAbilities.map(value => ({...value, odd: false}))
    const randomInt = getRandomInt(primaryChampionAbilities.length)
    primaryChampionAbilities[randomInt] = {...secondaryChampionAbilities[randomInt], odd: true}
    
    return {primaryChampion, secondaryChampion, abilities: primaryChampionAbilities}
}


export const getRandomChampionData = async () => {
    const randomChampionID = await getRandomChampion();
    const championData = await getChampionData(randomChampionID)
    return championData.data[randomChampionID]
}


const getChampionAbilityList = (data) => {
    const keys = ["Q", "W", "E", "R", "Passive"]
    let abilities = [...data.spells, data.passive]
    abilities = abilities.map((value, idx) => ({...value, key: keys[idx]}))
    console.log("get abilities")
    console.log(abilities)
    return abilities;
}

const getRandomInt = (num) => Math.floor(Math.random() * num)

const getRandomArrayItem = (array) => array[Math.floor(Math.random() * array.length)]  

export const getSpellIconPath = (abilityName) => {
    return `${IMAGE_URL}/spell/${abilityName}.png`;
}


export const getImageUrl = (image) => {
    return `${IMAGE_URL}/${image.group}/${image.full}`;
}

export const getPassiveIconPath = (champion) => {

}