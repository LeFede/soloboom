import logo from './logo.svg';
import twitch_logo from './media/twitch-logo.png'

import unranked_logo from './media/emblems/Emblem_Unranked.png'
import iron_logo from './media/emblems/Emblem_Iron.png'
import bronze_logo from './media/emblems/Emblem_Bronze.png'
import silver_logo from './media/emblems/Emblem_Silver.png'
import gold_logo from './media/emblems/Emblem_Gold.png'
import platinum_logo from './media/emblems/Emblem_Platinum.png'
import diamond_logo from './media/emblems/Emblem_Diamond.png'
import master_logo from './media/emblems/Emblem_Master.png'
import grandmaster_logo from './media/emblems/Emblem_Grandmaster.png'
import challenger_logo from './media/emblems/Emblem_Challenger.png'

import top_logo from './media/main/Position_Challenger-Top.png'
import jg_logo from './media/main/Position_Challenger-Jungle.png'
import mid_logo from './media/main/Position_Challenger-Mid.png'
import adc_logo from './media/main/Position_Challenger-Bot.png'
import supp_logo from './media/main/Position_Challenger-Support.png'

import './App.scss';
import axios from 'axios'
import { useState, useEffect } from 'react'


const api_key = 'RGAPI-ededcbf4-031b-4d19-9146-a3865be60695'

const new_client_id = 'gp762nuuoqcoxypju8c569th9wz7q5'
const access_token = '68nn0d23xq6ulbpkhqltfihfsimpvw'

const RANKED = 'RANKED_SOLO_5x5'

//const client_id = '7213egrl2or0yh6fxvx913iafxkco3'
//const secret = '21g2znytpvk5h4pjue7e0rkv6rubr1'

//const refresh_token = '5ymw6z82n3vicktcy8t7hjg4k1xtl1hwksofx094dgwhxjm2pl'


const summonersNames = [
  { sumName: 'LëFeeder', twitch: 'lefede', displayName: 'LeFede', playerName: 'LeFede', main: 'supp'},
  { sumName: 'GOINZINHO', twitch: '1goin', displayName: '1Goin', playerName: '1goin', main: 'adc'},
  { sumName: 'nbayoungkaze', twitch: '1kaze', displayName: '1kaze', playerName: '1kaze', main: 'mid'},
  { sumName: 'larvinha', twitch: '1pinku', displayName: '1pinku', playerName: '1pinku', main: 'supp'},
  // { sumName: 'Silla Army', twitch: 'YOUTUBE', displayName: 'YOUTUBE', playerName: 'Akali Army', main: 'mid'},
  { sumName: 'Nerf Impact', twitch: 'akalictrueno', displayName: 'Akalictrueno', playerName: 'akalictrueno', main: 'mid'},
  { sumName: 'DIOS DE LA INDIA', twitch: 'AngarTan', displayName: 'AngarTan', playerName: 'AngarTan', main: 'jg'},
  { sumName: 'TheVyper', twitch: 'aniviaplis', displayName: 'aniviaplis', playerName: 'aniviaplis', main: 'mid'},
  { sumName: 'xxrobotking511cx', twitch: 'apoka', displayName: 'Apoka', playerName: 'apoka', main: 'adc'},
  { sumName: 'GorDOUtilus', twitch: 'elBaneadou', displayName: 'ElbaneaDOU', playerName: 'Baneadou', main: 'supp'},
  { sumName: 'Hola soy bet', twitch: 'bet_miau', displayName: 'Bet_miau', playerName: 'bet miau', main: 'mid'},
  { sumName: 'Brunaldoo', twitch: 'Brunaldolol', displayName: 'Brunaldolol', playerName: 'Brunaldo', main: 'jg'},
  // { sumName: 'bzonk', twitch: 'cabez00n', displayName: 'Cabez00n', playerName: 'cabez00n', main: 'mid'}, //TODO: ARREGLAR
  // { sumName: 'CHIKO FG', twitch: 'FACEBOOK', displayName: 'FACEBOOK', playerName: 'ChikoAmadeus', main: 'jg'},
  { sumName: 'chtvnega', twitch: 'chobalinho', displayName: 'chobalinho', playerName: 'chobalinho', main: 'supp'},
  { sumName: 'VUYAH INDUSTRIES', twitch: 'Colacao_abuser', displayName: 'Colacao_Abuser', playerName: 'Colacao', main: 'mid'},
  { sumName: 'EL GORDO TAVL', twitch: 'COSCU', displayName: 'coscu', playerName: 'COSCU', main: 'jg'},
  // { sumName: 'Crayer', twitch: 'Crayerlol', displayName: 'Crayerlol', playerName: 'Crayerlol', main: 'jg'},
  // { sumName: 'LA HORA FELIZ', twitch: 'D1nastian', displayName: 'd1nastian', playerName: 'D1nastian', main: 'jg'},
  // { sumName: 'DayBeats', twitch: 'daybeats', displayName: 'daybeats', playerName: 'daybeats', main: 'jg'},
  // { sumName: 'Hungry Fishbones', twitch: 'Dificult', displayName: 'dificult', playerName: 'Dificult', main: 'adc'},
  // { sumName: 'ElBasura', twitch: 'elbasuramechanics', displayName: 'ElBasuraMechanics', playerName: 'elbasuramechan', main: 'supp'},
  // { sumName: 'Nexinhio', twitch: 'ellnexo', displayName: 'EllNexo', playerName: 'ellnexo', main: 'mid'},
  // { sumName: 'emperorgg twitch', twitch: 'emperorgg', displayName: 'emperorgg', playerName: 'emperorgg', main: 'jg'},
  // // { sumName: 'Fallen IV', twitch: 'FACEBOOK', displayName: 'FACEBOOK', playerName: 'Fallen IV', main: 'mid'},
  // { sumName: 'twitchfekklesuy', twitch: 'fekklesuy', displayName: 'fekklesuy', playerName: 'fekklesuy', main: 'mid'},
  // { sumName: 'Vaso de agua', twitch: 'Fersito', displayName: 'fersito', playerName: 'Fersito', main: 'mid'},
  // { sumName: 'Showmaker do LAS', twitch: 'filopo', displayName: 'Filopo', playerName: 'filopo', main: 'mid'},
  // { sumName: 'FIX 10', twitch: 'fixlol1', displayName: 'fixlol1', playerName: 'fix', main: 'adc'},
  // { sumName: 'AMENOOOO', twitch: 'menyo1', displayName: 'menyO1', playerName: 'Meño', main: 'adc'},
  // { sumName: 'FBand Peladinho', twitch: 'FrostyTwice', displayName: 'FrostyTwice', playerName: 'FrostyTwice', main: 'adc'},
  // { sumName: 'Frozzono', twitch: 'frozzenkreiger', displayName: 'FrozzenKreiger', playerName: 'frozzenkreiger', main: 'supp'},
  // // { sumName: 'FRS Fioga', twitch: 'FACEBOOK', displayName: 'FACEBOOK', playerName: 'FRS Fiora', main: 'top'},
  // { sumName: 'GervaSOADYT', twitch: 'gervasoadyt', displayName: 'GervaSOADYT', playerName: 'GervaSOAD', main: 'mid'},
  // { sumName: 'iGeveze', twitch: 'igeveze', displayName: 'iGeveze', playerName: 'iGeveze', main: 'adc'},
  // //{ sumName: 'Bolivian Surfer', twitch: 'FB', displayName: 'FB', playerName: 'Ghetoblaster', main: 'adc'},
  // { sumName: 'BOOM GODETO', twitch: 'godeto', displayName: 'GODETO', playerName: 'Godeto', main: 'adc'},
  // { sumName: 'tavl chap chap', twitch: 'Grafo', displayName: 'grafo', playerName: 'Grafo', main: 'mid'},
  // { sumName: 'Memory Lane', twitch: 'lol_hachi', displayName: 'lol_hachi', playerName: 'Hachi', main: 'jg'},
  // { sumName: 'Sem pressao II', twitch: 'heartbreaker_yi', displayName: 'Heartbreaker_Yi', playerName: 'heartbraker', main: 'jg'},
  // { sumName: 'mind prison', twitch: 'Hoodied0', displayName: 'Hoodied0', playerName: 'Hoodied', main: 'jg'},
  // //{ sumName: 'SOS COLOMBIA', twitch: 'FB', displayName: 'FB', playerName: 'Hugrock', main: 'jg'},
  // { sumName: 'COMPRE WINRAR', twitch: 'imsaiem', displayName: 'imSaIem', playerName: 'imsaiem', main: 'adc'},
  // { sumName: 'WATAMELON LOVER', twitch: 'inclasky1', displayName: 'iNCLASKY1', playerName: 'inclasky1', main: 'adc'},
  // { sumName: 'kyùbi', twitch: 'ivanwake', displayName: 'ivanwake', playerName: 'ivanwake', main: 'mid'},
  // //{ sumName: 'Joker was Pyke', twitch: 'FB', displayName: 'FB', playerName: 'Joker Was Here', main: 'mid'},
  // { sumName: 'United We Stand', twitch: 'jonakagess', displayName: 'Jonakagess', playerName: 'jonakagess', main: 'mid'},
  // { sumName: 'Juancha OFF Drug', twitch: 'juancha98', displayName: 'Juancha98', playerName: 'Juancha', main: 'adc'},
  // { sumName: 'TIER 20 TOPLANER', twitch: 'JunTendo_lol', displayName: 'juntendo_lol', playerName: 'Jun Tendo', main: 'mid'},
  // { sumName: '6Dark6BoyEdgy6', twitch: 'k1michi', displayName: 'k1michi', playerName: 'k1michi', main: 'jg'},
  // { sumName: 'kiiion', twitch: 'kiiion', displayName: 'kiiioN', playerName: 'kiiion', main: 'top'},
  // { sumName: '23 KIMI 777', twitch: 'kimi', displayName: 'Kimi', playerName: 'kimi', main: 'adc'},
  // { sumName: 'O Lórax', twitch: 'kordemadow', displayName: 'KordeMadow', playerName: 'kordemadow', main: 'jg'},
  // { sumName: 'vinagre de lechi', twitch: 'lechigg', displayName: 'Lechigg', playerName: 'lechigg', main: 'adc'},
  // { sumName: 'El Legend Zed pa', twitch: 'legendzed', displayName: 'LegendZed', playerName: 'legendzed', main: 'mid'},
  // { sumName: 'Patagonian Mid', twitch: 'legna1337', displayName: 'Legna1337', playerName: 'legna1337', main: 'mid'},
  // { sumName: 'Unknown AD', twitch: 'leitof', displayName: 'LeitoF', playerName: 'leitof', main: 'adc'},
  // { sumName: 'old proplayer', twitch: 'lesmart', displayName: 'lesmart', playerName: 'lesmart', main: 'mid'},
  // { sumName: 'pathing', twitch: 'linsweet', displayName: 'linsweet', playerName: 'linsweet', main: 'jg'},
  // { sumName: 'Aghanim Scepter', twitch: 'lolfalcon02', displayName: 'lolfalcon02', playerName: 'lolfalcon02', main: 'mid'},
  // { sumName: 'Longaniza', twitch: 'Longiinius', displayName: 'Longiinius', playerName: 'Longiinius', main: 'adc'},
  // { sumName: 'VeganoSaurio', twitch: 'MagicoLoL', displayName: 'MagicoLoL', playerName: 'MagicoLoL', main: 'mid'},
  // { sumName: 'Showmaher', twitch: 'maherzin', displayName: 'maherzin', playerName: 'maherzin', main: 'mid'},
  // { sumName: 'Don cangrejo', twitch: 'malendario', displayName: 'Malendario', playerName: 'Malendario', main: 'top'},
  // { sumName: 'Manolitop', twitch: 'Manolitop', displayName: 'Manolitop', playerName: 'Manolito', main: 'top'},
  // { sumName: 'ME ANOTÓ 1 AMIGO', twitch: 'mantarraya', displayName: 'MANTARRAYA', playerName: 'Mantarraya', main: 'top'},
  // // { sumName: 'criticas qls', twitch: 'FB', displayName: 'FB', playerName: 'Misrra', main: 'jg'},
  // { sumName: 'Motadexinho', twitch: 'motadex', displayName: 'Motadex', playerName: 'Motadex', main: 'adc'},
  // { sumName: 'FBGG Murillo Sama', twitch: 'FB', displayName: 'FB', playerName: 'Murillosamalol', main: 'mid'},
  // { sumName: 'NaKEKW', twitch: 'nako1s', displayName: 'Nako1s', playerName: 'nako1s', main: 'mid'},
  // { sumName: 'QFlashRzhonyas', twitch: 'karcass9', displayName: 'karcass9', playerName: 'Karcass', main: 'mid'},
  // { sumName: 'Yonko Katarina', twitch: 'negrolol', displayName: 'NegroLoL', playerName: 'negrolol', main: 'mid'},
  // { sumName: 'Serafill', twitch: 'NickHeumann', displayName: 'NickHeumann', playerName: 'NickHeumann', main: 'adc'},
  // { sumName: 'NicoChauBoom', twitch: 'nicochaudron', displayName: 'NicoChaudron', playerName: 'nicochaudron', main: 'adc'},
  // { sumName: 'DWG KIAA', twitch: 'Nobodyy2', displayName: 'nobodyy2', playerName: 'Nobody', main: 'mid'},
  // { sumName: 'Nonooo', twitch: 'nonoolol', displayName: 'nonoolol', playerName: 'nonolol', main: 'jg'},
  // { sumName: 'El Naaaaaaaaartz', twitch: 'nurtz1', displayName: 'nurtz1', playerName: 'Nurtzlol', main: 'top'},
  // { sumName: 'ILLAOI PUNK', twitch: 'octatoxic', displayName: 'OctaToxic', playerName: 'Octatoxic', main: 'top'},
  // { sumName: 'Pishey1', twitch: 'pishey1', displayName: 'pishey1', playerName: 'pishey1', main: 'mid'},
  // { sumName: 'Julïan', twitch: 'plugo', displayName: 'Plugo', playerName: 'Plugo', main: 'mid'},
  // { sumName: 'Primoor', twitch: 'Primoor', displayName: 'primoor', playerName: 'Primoor', main: 'jg'},
  // { sumName: 'MooBaDkciN', twitch: 'pudggge', displayName: 'pudGGGe', playerName: 'Pludggge', main: 'jg'},
  // { sumName: 'qyiana001', twitch: 'qiyana001', displayName: 'qiyana001', playerName: 'qiyana001', main: 'mid'},
  // { sumName: 'INSANO 3000', twitch: 'Rakyz', displayName: 'Rakyz', playerName: 'Rakyz', main: 'mid'},
  // { sumName: 'Renmiausito', twitch: 'rengarsitoo', displayName: 'rengarsitoo', playerName: 'rengarsitoo', main: 'jg'},
  // { sumName: 'Warm Sunset', twitch: 'rojankhzxr', displayName: 'Rojankhzxr', playerName: 'rojan', main: 'mid'},
  // { sumName: 'SB rudebwoy', twitch: 'Rudebwoy05', displayName: 'RudeBwoy05', playerName: 'Rudebwoy', main: 'mid'},
  // { sumName: 'Sheladin0', twitch: 'shelao', displayName: 'shelao', playerName: 'shelao', main: 'top'},
  // { sumName: 'Tiki Top', twitch: 'sirtiki', displayName: 'SirTiki', playerName: 'sir tiki', main: 'top'},
  // { sumName: 'Paige Spara', twitch: 'skrmid', displayName: 'skrmid', playerName: 'skr', main: 'mid'},
  // { sumName: 'EL ANGELITO XAM', twitch: 'sktxam', displayName: 'sktxam', playerName: 'sktxam', main: 'mid'},
  // { sumName: 'idk what to do', twitch: 'Slowqt', displayName: 'slowqt', playerName: 'Slow', main: 'supp'},
  // { sumName: 'McDonalds adc', twitch: 'hikosiss', displayName: 'Hikosiss', playerName: 'hikosiss', main: 'adc'},
  // { sumName: 'Peo Exótico', twitch: 'Sofikimmy', displayName: 'SofiKimmy', playerName: 'Sofikimmy', main: 'adc'},
  // { sumName: 'ademasdemiremix', twitch: 'Sonykyyy', displayName: 'sonykyyy', playerName: 'Sonyky', main: 'supp'},
  // { sumName: 'mpeso', twitch: 'Soul13', displayName: 'soul13', playerName: 'Soul', main: 'jg'},
  // { sumName: 'Sseck', twitch: 'sseck', displayName: 'Sseck', playerName: 'sseck', main: 'jg'},
  // { sumName: 'Kerry Katula', twitch: 'StarkCrash', displayName: 'Starkcrash', playerName: 'StarkCrash', main: 'adc'},
  // { sumName: 'YouTubeStune', twitch: 'Stune36', displayName: 'stune36', playerName: 'Stune36', main: 'mid'},
  // { sumName: 'Pikachu Watón', twitch: 'sufukato', displayName: 'Sufukato', playerName: 'Sufukato', main: 'top'},

  // { sumName: 'TalonnAbuser1', twitch: 'talon_a1', displayName: 'Talon_A1', playerName: 'TalonnAbuser1', main: 'mid'},
  // { sumName: 'ad boomer', twitch: 'theprodigylol', displayName: 'theprodigylol', playerName: 'theprodigylol', main: 'adc'},
  // { sumName: 'CORASON DE SEDA', twitch: 'thistarr', displayName: 'Thistarr', playerName: 'thistarrr', main: 'mid'},
  // { sumName: 'Timeemot', twitch: 'tieemot', displayName: 'tieemot', playerName: 'timeemot', main: 'adc'},
  // { sumName: 'SBM tinargxd', twitch: 'tinargxd', displayName: 'tinargxd', playerName: 'tinarg', main: 'jg'},
  // { sumName: 'beamer bóy', twitch: 'Tomnam', displayName: 'TomnaM', playerName: 'Tomnam', main: 'adc'},
  // { sumName: 'K1 K1 K1 K1', twitch: 'Troxeerr', displayName: 'troxeerr', playerName: 'Troxeerr', main: 'adc'},
  // { sumName: 'Tsunamito', twitch: 'Tsunamito', displayName: 'Tsunamito', playerName: 'Tsunami', main: 'supp'},
  // { sumName: 'doppel gangs', twitch: 'Tufisupp', displayName: 'tufisupp', playerName: 'Tufi', main: 'supp'},
  // { sumName: 'xgamer666x', twitch: 'tulz1', displayName: 'tulz1', playerName: 'tulz', main: 'supp'},
  // { sumName: 'TuteBooom', twitch: 'TutePra', displayName: 'TutePra', playerName: 'TutePra', main: 'adc'},
  // { sumName: 'txz do br', twitch: 'txzlol', displayName: 'txzlol', playerName: 'tzxlol', main: 'top'},
  // { sumName: 'bramble vest', twitch: 'umrt0', displayName: 'umrt0', playerName: 'umrt0', main: 'top'},
  // { sumName: 'bashe', twitch: 'valuxitax', displayName: 'valuxitax', playerName: 'valuxitax', main: 'top'},
  // { sumName: '2005 Power', twitch: 'vichox009xd', displayName: 'Vichox009xd', playerName: 'vichox009xd', main: 'mid'},
  // { sumName: 'EL COCHE BOMBA', twitch: 'volcanicdogg', displayName: 'volcanicdogg', playerName: 'volcanicdogg', main: 'jg'},
  // { sumName: 'Weskerinho', twitch: 'weskeer', displayName: 'weskeer', playerName: 'weskeer', main: 'adc'},
  // { sumName: 'all pain', twitch: 'wildrengar', displayName: 'WildRengar', playerName: 'wildrengar', main: 'jg'},
  // { sumName: 'WindsitoAbuser', twitch: 'windsito', displayName: 'Windsito', playerName: 'windsito', main: 'mid'},
  // { sumName: 'Hououin Kyouma1', twitch: 'xeydon', displayName: 'Xeydon', playerName: 'xeydon', main: 'jg'},
  // { sumName: 'chipa1', twitch: 'Xypherzzzz', displayName: 'Xypherzzzz', playerName: 'Xypher', main: 'jg'},
  // { sumName: 'Zatorquinho', twitch: 'zatorco', displayName: 'Zatorco', playerName: 'zatorco', main: 'mid'},
  // { sumName: 'Zealot1', twitch: 'zealot', displayName: 'Zealot', playerName: 'zealot', main: 'adc'},
  // { sumName: 'SPIN0SAURUS', twitch: 'Zeko', displayName: 'zEkO', playerName: 'Zeko', main: 'adc'},
  // { sumName: 'Zui de Gelo', twitch: 'ZuiDeHielo', displayName: 'ZuiDeHielo', playerName: 'ZuiDeHielo', main: 'mid'},
  // { sumName: 'ZyLar', twitch: 'thezylar', displayName: 'TheZyLar', playerName: 'thezylar', main: 'jg'},
  // { sumName: 'Maestra Jager', twitch: 'MaestraJager', displayName: 'MaestraJager', playerName: 'MaestraJager', main: 'supp'},
]

function App() {

  // const [ getText , setText ] = useState([])
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setItems([])
    //let sortedArray = []
    console.clear()

    const fetchItems = async (sum, twitch, displayName, main, playerName) => {
      
  
      

      // let {data} = await axios('http://190.103.81.158:81/')
      

      // let { data } = await axios(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${sum}?api_key=${api_key}`,
      //   {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*"
      //     }
      //   }
      // )
      //console.log(data)

      let {data} = await axios(`http://190.103.81.158:81/bySum?sum=${sum}`)
      let response = await axios(`http://190.103.81.158:81/byId?id=${data.id}`)

      // let response = await axios(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.id}?api_key=${api_key}`,
      // {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*"
      //   }
      // })

      let summonerLevel = data.summonerLevel
      let league = ''
      let division = ''
      let losses = 0
      let wins = 0
      let leaguePoints = 0
      let order = 0
      let profileIconId = data.profileIconId === 4959 ? 29 : data.profileIconId
      let percentage = 0
      let isLive = false
      let emblem

      let uwu = await fetch(`https://api.twitch.tv/helix/search/channels?query=${twitch}`, {
        headers: {
          'client-id': `${new_client_id}`,
          'Authorization': `Bearer ${access_token}`
        }
      })

      let asd = await uwu.json()
      //console.log(asd.data)
      //const isLivee = asd.data.map(streamer => streamer.display_name === displayName ? isLive = true : isLive = false)
      const isLivee = asd.data.filter(streamer => streamer.display_name === displayName)[0]
      
      isLive = isLivee.is_live
      //console.log(data)

      response.data.map(rankedData => rankedData.queueType === RANKED ? league = rankedData.tier : void (0))

      
      response.data.map(rankedData => rankedData.queueType === RANKED ? division = rankedData.rank : void (0))

      //(league === 'CHALLENGER'  || league === 'MASTER'  || league === 'GRANDMASTER' ) ? division = '' : void(0)
      league === 'CHALLENGER' ? division = '' : void(0)
      league === 'GRANDMASTER' ? division = '' : void(0)
      league === 'MASTER' ? division = '' : void(0)
      
      response.data.map(rankedData => rankedData.queueType === RANKED ? leaguePoints = rankedData.leaguePoints : void (0))

      response.data.map(rankedData => rankedData.queueType === RANKED ? losses = rankedData.losses : void (0))

      response.data.map(rankedData => rankedData.queueType === RANKED ? wins = rankedData.wins : void (0))

      percentage = Math.trunc((100 / (wins + losses)) * wins)
      //response.data.map(rankedData => console.log(rankedData))
      //console.log(data.profileIconId)

      switch (division) {
        case 'I':
          order += 600
          break
        case 'II':
          order += 400
          break
        case 'III':
          order += 200
          break
        case 'IV':
          order += 0
          break
        default:
          break
      }

      switch (main) {
        case 'top':
          main = top_logo
          break;
        case 'jg':
          main = jg_logo
          break;
        case 'mid':
          main = mid_logo
          break;
        case 'adc':
          main = adc_logo
          break;
        case 'supp':
          main = supp_logo
          break;
      }

      switch (league) {
        case 'CHALLENGER':
          order += 6000
          emblem = challenger_logo
          break
        case 'GRANDMASTER':
          order += 6000
          emblem = grandmaster_logo
          break
        case 'MASTER':
          emblem = master_logo
          order += 6000
          break
        case 'DIAMOND':
          emblem = diamond_logo
          order += 5000
          break
        case 'PLATINUM':
          emblem = platinum_logo
          order += 4000
          break
        case 'GOLD':
          emblem = gold_logo
          order += 3000
          break
        case 'SILVER':
          emblem = silver_logo
          order += 2000
          break
        case 'BRONZE':
          emblem = bronze_logo
          order += 1000
          break
        case 'IRON':
          emblem = iron_logo
          order += 0
          break
        default:
          emblem = unranked_logo
          break
      }

      order += leaguePoints

      //let data = ''
      let { name = '', id = '' } = data

      let player = {
        name,
        id,
        league,
        division,
        order,
        leaguePoints,
        profileIconId,
        losses,
        wins,
        percentage,
        summonerLevel,
        isLive,
        twitch,
        emblem,
        main,
        playerName
      }

      //console.log(player)
      setItems((prev) => [...prev, player].sort((a, b) => {
        return b.order - a.order
      }))
      
    }

    summonersNames.map(({ sumName, twitch, displayName, main, playerName }) => fetchItems(sumName, twitch, displayName, main, playerName))





  }, [])

  return (
    <div className="App">
      <small className="lefede">Tabla creada por <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/lefede">LeFede</a></small>
      <section className="Background"></section>
      <section className="App-container">
        <div className="title-container">
          <h1>#SoloBoomChallenge</h1> 
        </div>
        
        <table>
          <ol className='table-titles'>
            <li></li>
            <li>Invocador</li>
            <li>Main</li>
            {/* <li>Player Name</li> */}
            <li>Rank</li>
            <li>%Win</li>
            <li>Stream</li>
          </ol>
        
          {items.map(({  playerName, profileIconId, name, league, division, leaguePoints, order, losses, wins, percentage, summonerLevel, isLive , twitch , emblem, main}, index) =>
            
            // <div className="summoner">
            //   <div><img src={`https://ddragon.leagueoflegends.com/cdn/11.8.1/img/profileicon/${profileIconId}.png`} alt='summoner pic' /></div>
            //   <div><p>{name} {summonerLevel}</p></div>
            //   {/* <span>{item.id}</span> */}
            //   <div><p>{league} {division} {leaguePoints}LP</p></div>
            //   <div><p>{wins} <green>W</green> {losses}<red> L</red> ({percentage}%)</p></div>
            //   {/* <span>order: {order} </span> */}
            //   { twitch !== 'no' && <div><p><img src={twitch_logo} /><a href={`https://www.twitch.tv/${twitch}`} target='_blank' rel="noreferrer">{isLive ? <div>ONLINE</div> : <div>OFFLINE</div>} </a></p></div> }
            // </div>
            
            <ol key={index} title={`${index+1}°`} className="summoner">
                      

              <li className="icon"><img src={`https://ddragon.leagueoflegends.com/cdn/11.8.1/img/profileicon/${profileIconId}.png`} alt='summoner pic' /></li>
              <li className='names'><p>{name}</p><p className='min-name'>{playerName}</p></li>
              <li><div><img alt='main' src={main} /></div></li>
              {/* <li><p>coscu</p></li> */}
              {/* <span>{item.id}</span> */}
              <li className="rank"><div><img src={emblem} alt='rank' /></div><p>{league} {division} {leaguePoints}LP</p></li>
              { wins === 0 & losses === 0 ? <li>-</li> : <li className="winrate"><p>{wins}<span className="green">W</span> {losses}<span className="red">L</span></p><p className="percentage">({percentage}%)</p></li> }
              {/* <span>order: {order} </span> */}
              { twitch !== 'no' && <li><a href={`https://www.twitch.tv/${twitch}`} target='_blank' rel="noreferrer"><p><div><img src={twitch_logo} alt='twitch logo' /></div>{isLive ? <span className="online">ONLINE</span> : <span>OFFLINE</span>} </p></a></li> }
            </ol>


          )}
        </table>
      </section>
    </div>
  );
}

export default App;
