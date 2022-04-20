
// node proposal-emergency-shutdown.js
require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(501), 'ustx': tx.uintCV(7937551) }),
tx.tupleCV({ 'to': tx.uintCV(503), 'ustx': tx.uintCV(6514372) }),
tx.tupleCV({ 'to': tx.uintCV(504), 'ustx': tx.uintCV(29821996) }),
tx.tupleCV({ 'to': tx.uintCV(506), 'ustx': tx.uintCV(1336438) }),
tx.tupleCV({ 'to': tx.uintCV(507), 'ustx': tx.uintCV(62380683) }),
tx.tupleCV({ 'to': tx.uintCV(509), 'ustx': tx.uintCV(1325590) }),
tx.tupleCV({ 'to': tx.uintCV(512), 'ustx': tx.uintCV(1083864) }),
tx.tupleCV({ 'to': tx.uintCV(515), 'ustx': tx.uintCV(7879341) }),
tx.tupleCV({ 'to': tx.uintCV(517), 'ustx': tx.uintCV(3939671) }),
tx.tupleCV({ 'to': tx.uintCV(521), 'ustx': tx.uintCV(8366629) }),
tx.tupleCV({ 'to': tx.uintCV(522), 'ustx': tx.uintCV(50684305) }),
tx.tupleCV({ 'to': tx.uintCV(531), 'ustx': tx.uintCV(22078178) }),
tx.tupleCV({ 'to': tx.uintCV(534), 'ustx': tx.uintCV(2924095) }),
tx.tupleCV({ 'to': tx.uintCV(535), 'ustx': tx.uintCV(3897839729) }),
tx.tupleCV({ 'to': tx.uintCV(543), 'ustx': tx.uintCV(3984319) }),
tx.tupleCV({ 'to': tx.uintCV(544), 'ustx': tx.uintCV(1559517) }),
tx.tupleCV({ 'to': tx.uintCV(545), 'ustx': tx.uintCV(4735419) }),
tx.tupleCV({ 'to': tx.uintCV(548), 'ustx': tx.uintCV(1960285) }),
tx.tupleCV({ 'to': tx.uintCV(549), 'ustx': tx.uintCV(25342152) }),
tx.tupleCV({ 'to': tx.uintCV(550), 'ustx': tx.uintCV(39522010) }),
tx.tupleCV({ 'to': tx.uintCV(551), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(552), 'ustx': tx.uintCV(7798) }),
tx.tupleCV({ 'to': tx.uintCV(554), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(555), 'ustx': tx.uintCV(24573877) }),
tx.tupleCV({ 'to': tx.uintCV(558), 'ustx': tx.uintCV(3196508) }),
tx.tupleCV({ 'to': tx.uintCV(559), 'ustx': tx.uintCV(42886720) }),
tx.tupleCV({ 'to': tx.uintCV(560), 'ustx': tx.uintCV(97469817) }),
tx.tupleCV({ 'to': tx.uintCV(561), 'ustx': tx.uintCV(2534215) }),
tx.tupleCV({ 'to': tx.uintCV(563), 'ustx': tx.uintCV(19493963) }),
tx.tupleCV({ 'to': tx.uintCV(564), 'ustx': tx.uintCV(2381934) }),
tx.tupleCV({ 'to': tx.uintCV(568), 'ustx': tx.uintCV(21950100) }),
tx.tupleCV({ 'to': tx.uintCV(570), 'ustx': tx.uintCV(2151775) }),
tx.tupleCV({ 'to': tx.uintCV(572), 'ustx': tx.uintCV(20650023) }),
tx.tupleCV({ 'to': tx.uintCV(573), 'ustx': tx.uintCV(38988) }),
tx.tupleCV({ 'to': tx.uintCV(576), 'ustx': tx.uintCV(6368594) }),
tx.tupleCV({ 'to': tx.uintCV(577), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(583), 'ustx': tx.uintCV(3579087) }),
tx.tupleCV({ 'to': tx.uintCV(584), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(585), 'ustx': tx.uintCV(129605382) }),
tx.tupleCV({ 'to': tx.uintCV(587), 'ustx': tx.uintCV(4395603) }),
tx.tupleCV({ 'to': tx.uintCV(589), 'ustx': tx.uintCV(5281079) }),
tx.tupleCV({ 'to': tx.uintCV(591), 'ustx': tx.uintCV(214434) }),
tx.tupleCV({ 'to': tx.uintCV(592), 'ustx': tx.uintCV(74103009) }),
tx.tupleCV({ 'to': tx.uintCV(593), 'ustx': tx.uintCV(102522311) }),
tx.tupleCV({ 'to': tx.uintCV(594), 'ustx': tx.uintCV(198838) }),
tx.tupleCV({ 'to': tx.uintCV(597), 'ustx': tx.uintCV(27292) }),
tx.tupleCV({ 'to': tx.uintCV(598), 'ustx': tx.uintCV(584819) }),
tx.tupleCV({ 'to': tx.uintCV(599), 'ustx': tx.uintCV(1979458) }),
tx.tupleCV({ 'to': tx.uintCV(600), 'ustx': tx.uintCV(7521280) }),
tx.tupleCV({ 'to': tx.uintCV(603), 'ustx': tx.uintCV(9894886) }),
tx.tupleCV({ 'to': tx.uintCV(605), 'ustx': tx.uintCV(19495363) }),
tx.tupleCV({ 'to': tx.uintCV(608), 'ustx': tx.uintCV(9889929) }),
tx.tupleCV({ 'to': tx.uintCV(610), 'ustx': tx.uintCV(38988) }),
tx.tupleCV({ 'to': tx.uintCV(619), 'ustx': tx.uintCV(3119034) }),
tx.tupleCV({ 'to': tx.uintCV(626), 'ustx': tx.uintCV(136458) }),
tx.tupleCV({ 'to': tx.uintCV(628), 'ustx': tx.uintCV(7991269) }),
tx.tupleCV({ 'to': tx.uintCV(629), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(630), 'ustx': tx.uintCV(27487558) }),
tx.tupleCV({ 'to': tx.uintCV(631), 'ustx': tx.uintCV(1949396) }),
tx.tupleCV({ 'to': tx.uintCV(634), 'ustx': tx.uintCV(3995634) }),
tx.tupleCV({ 'to': tx.uintCV(635), 'ustx': tx.uintCV(14109731) }),
tx.tupleCV({ 'to': tx.uintCV(637), 'ustx': tx.uintCV(22625605) }),
tx.tupleCV({ 'to': tx.uintCV(639), 'ustx': tx.uintCV(3995634) }),
tx.tupleCV({ 'to': tx.uintCV(640), 'ustx': tx.uintCV(83673308) }),
tx.tupleCV({ 'to': tx.uintCV(642), 'ustx': tx.uintCV(5848189) }),
tx.tupleCV({ 'to': tx.uintCV(644), 'ustx': tx.uintCV(536880) }),
tx.tupleCV({ 'to': tx.uintCV(647), 'ustx': tx.uintCV(214434) }),
tx.tupleCV({ 'to': tx.uintCV(649), 'ustx': tx.uintCV(15595171) }),
tx.tupleCV({ 'to': tx.uintCV(650), 'ustx': tx.uintCV(1559517) }),
tx.tupleCV({ 'to': tx.uintCV(651), 'ustx': tx.uintCV(11696) }),
tx.tupleCV({ 'to': tx.uintCV(660), 'ustx': tx.uintCV(1012038) }),
tx.tupleCV({ 'to': tx.uintCV(667), 'ustx': tx.uintCV(2924095) }),
tx.tupleCV({ 'to': tx.uintCV(670), 'ustx': tx.uintCV(506843) }),
tx.tupleCV({ 'to': tx.uintCV(675), 'ustx': tx.uintCV(3995634) }),
tx.tupleCV({ 'to': tx.uintCV(677), 'ustx': tx.uintCV(11696) }),
tx.tupleCV({ 'to': tx.uintCV(678), 'ustx': tx.uintCV(15595) }),
tx.tupleCV({ 'to': tx.uintCV(681), 'ustx': tx.uintCV(11081919) }),
tx.tupleCV({ 'to': tx.uintCV(683), 'ustx': tx.uintCV(3995634) }),
tx.tupleCV({ 'to': tx.uintCV(684), 'ustx': tx.uintCV(2339276) }),
tx.tupleCV({ 'to': tx.uintCV(689), 'ustx': tx.uintCV(9961108) }),
tx.tupleCV({ 'to': tx.uintCV(698), 'ustx': tx.uintCV(3628588) }),
tx.tupleCV({ 'to': tx.uintCV(709), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(711), 'ustx': tx.uintCV(4000161) }),
tx.tupleCV({ 'to': tx.uintCV(713), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(714), 'ustx': tx.uintCV(10472946) }),
tx.tupleCV({ 'to': tx.uintCV(715), 'ustx': tx.uintCV(6440806) }),
tx.tupleCV({ 'to': tx.uintCV(730), 'ustx': tx.uintCV(391285) }),
tx.tupleCV({ 'to': tx.uintCV(732), 'ustx': tx.uintCV(1282703) }),
tx.tupleCV({ 'to': tx.uintCV(743), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(744), 'ustx': tx.uintCV(3396916) }),
tx.tupleCV({ 'to': tx.uintCV(748), 'ustx': tx.uintCV(382082) }),
tx.tupleCV({ 'to': tx.uintCV(749), 'ustx': tx.uintCV(21300726) }),
tx.tupleCV({ 'to': tx.uintCV(752), 'ustx': tx.uintCV(66279) }),
tx.tupleCV({ 'to': tx.uintCV(754), 'ustx': tx.uintCV(2560751) }),
tx.tupleCV({ 'to': tx.uintCV(761), 'ustx': tx.uintCV(2390592) }),
tx.tupleCV({ 'to': tx.uintCV(763), 'ustx': tx.uintCV(2729155) }),
tx.tupleCV({ 'to': tx.uintCV(764), 'ustx': tx.uintCV(8109489) }),
tx.tupleCV({ 'to': tx.uintCV(766), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(774), 'ustx': tx.uintCV(4630068) }),
tx.tupleCV({ 'to': tx.uintCV(777), 'ustx': tx.uintCV(19493963) }),
tx.tupleCV({ 'to': tx.uintCV(778), 'ustx': tx.uintCV(13187381) }),
tx.tupleCV({ 'to': tx.uintCV(779), 'ustx': tx.uintCV(1796136) }),
tx.tupleCV({ 'to': tx.uintCV(780), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(787), 'ustx': tx.uintCV(1095561) }),
tx.tupleCV({ 'to': tx.uintCV(790), 'ustx': tx.uintCV(3984319) }),
tx.tupleCV({ 'to': tx.uintCV(791), 'ustx': tx.uintCV(3396676) }),
tx.tupleCV({ 'to': tx.uintCV(792), 'ustx': tx.uintCV(39689489) }),
tx.tupleCV({ 'to': tx.uintCV(794), 'ustx': tx.uintCV(25349950) }),
tx.tupleCV({ 'to': tx.uintCV(797), 'ustx': tx.uintCV(2381369) }),
tx.tupleCV({ 'to': tx.uintCV(802), 'ustx': tx.uintCV(46786) }),
tx.tupleCV({ 'to': tx.uintCV(806), 'ustx': tx.uintCV(31190) }),
tx.tupleCV({ 'to': tx.uintCV(807), 'ustx': tx.uintCV(319701) }),
tx.tupleCV({ 'to': tx.uintCV(809), 'ustx': tx.uintCV(31190) }),
tx.tupleCV({ 'to': tx.uintCV(813), 'ustx': tx.uintCV(116964) }),
tx.tupleCV({ 'to': tx.uintCV(815), 'ustx': tx.uintCV(3127821) }),
tx.tupleCV({ 'to': tx.uintCV(819), 'ustx': tx.uintCV(382082) }),
tx.tupleCV({ 'to': tx.uintCV(822), 'ustx': tx.uintCV(1169638) }),
tx.tupleCV({ 'to': tx.uintCV(825), 'ustx': tx.uintCV(1949396) }),
tx.tupleCV({ 'to': tx.uintCV(826), 'ustx': tx.uintCV(779759) }),
tx.tupleCV({ 'to': tx.uintCV(828), 'ustx': tx.uintCV(3996404) }),
tx.tupleCV({ 'to': tx.uintCV(831), 'ustx': tx.uintCV(16459534) }),
tx.tupleCV({ 'to': tx.uintCV(835), 'ustx': tx.uintCV(966901) }),
tx.tupleCV({ 'to': tx.uintCV(842), 'ustx': tx.uintCV(31190) }),
tx.tupleCV({ 'to': tx.uintCV(848), 'ustx': tx.uintCV(1992160) }),
tx.tupleCV({ 'to': tx.uintCV(849), 'ustx': tx.uintCV(5889752) }),
tx.tupleCV({ 'to': tx.uintCV(857), 'ustx': tx.uintCV(194940) }),
tx.tupleCV({ 'to': tx.uintCV(858), 'ustx': tx.uintCV(5251593) }),
tx.tupleCV({ 'to': tx.uintCV(862), 'ustx': tx.uintCV(13486959) }),
tx.tupleCV({ 'to': tx.uintCV(865), 'ustx': tx.uintCV(159851) }),
tx.tupleCV({ 'to': tx.uintCV(867), 'ustx': tx.uintCV(1169638) }),
tx.tupleCV({ 'to': tx.uintCV(869), 'ustx': tx.uintCV(4147141) }),
tx.tupleCV({ 'to': tx.uintCV(874), 'ustx': tx.uintCV(2150347) }),
tx.tupleCV({ 'to': tx.uintCV(875), 'ustx': tx.uintCV(5970523) }),
tx.tupleCV({ 'to': tx.uintCV(876), 'ustx': tx.uintCV(10430745) }),
tx.tupleCV({ 'to': tx.uintCV(878), 'ustx': tx.uintCV(6721519) }),
tx.tupleCV({ 'to': tx.uintCV(880), 'ustx': tx.uintCV(3984109) }),
tx.tupleCV({ 'to': tx.uintCV(882), 'ustx': tx.uintCV(15595) }),
tx.tupleCV({ 'to': tx.uintCV(883), 'ustx': tx.uintCV(1949396) }),
tx.tupleCV({ 'to': tx.uintCV(884), 'ustx': tx.uintCV(350906269) }),
tx.tupleCV({ 'to': tx.uintCV(890), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(892), 'ustx': tx.uintCV(7798) }),
tx.tupleCV({ 'to': tx.uintCV(893), 'ustx': tx.uintCV(779759) }),
tx.tupleCV({ 'to': tx.uintCV(898), 'ustx': tx.uintCV(1731064) }),
tx.tupleCV({ 'to': tx.uintCV(900), 'ustx': tx.uintCV(11988292) }),
tx.tupleCV({ 'to': tx.uintCV(902), 'ustx': tx.uintCV(70851291) }),
tx.tupleCV({ 'to': tx.uintCV(903), 'ustx': tx.uintCV(8263494) }),
tx.tupleCV({ 'to': tx.uintCV(907), 'ustx': tx.uintCV(1596504) }),
tx.tupleCV({ 'to': tx.uintCV(911), 'ustx': tx.uintCV(311903) }),
tx.tupleCV({ 'to': tx.uintCV(912), 'ustx': tx.uintCV(7968638) }),
tx.tupleCV({ 'to': tx.uintCV(919), 'ustx': tx.uintCV(233928) }),
tx.tupleCV({ 'to': tx.uintCV(922), 'ustx': tx.uintCV(27292) }),
tx.tupleCV({ 'to': tx.uintCV(924), 'ustx': tx.uintCV(1169638) }),
tx.tupleCV({ 'to': tx.uintCV(928), 'ustx': tx.uintCV(6514372) }),
tx.tupleCV({ 'to': tx.uintCV(933), 'ustx': tx.uintCV(1242782) }),
tx.tupleCV({ 'to': tx.uintCV(934), 'ustx': tx.uintCV(868654) }),
tx.tupleCV({ 'to': tx.uintCV(935), 'ustx': tx.uintCV(178145) }),
tx.tupleCV({ 'to': tx.uintCV(937), 'ustx': tx.uintCV(15319923) }),
tx.tupleCV({ 'to': tx.uintCV(939), 'ustx': tx.uintCV(584819) }),
tx.tupleCV({ 'to': tx.uintCV(940), 'ustx': tx.uintCV(5051210) }),
tx.tupleCV({ 'to': tx.uintCV(942), 'ustx': tx.uintCV(3279377) }),
tx.tupleCV({ 'to': tx.uintCV(943), 'ustx': tx.uintCV(187142) }),
tx.tupleCV({ 'to': tx.uintCV(944), 'ustx': tx.uintCV(2534215) }),
tx.tupleCV({ 'to': tx.uintCV(945), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(946), 'ustx': tx.uintCV(3540990) }),
tx.tupleCV({ 'to': tx.uintCV(947), 'ustx': tx.uintCV(144255) }),
tx.tupleCV({ 'to': tx.uintCV(948), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(951), 'ustx': tx.uintCV(9382122) }),
tx.tupleCV({ 'to': tx.uintCV(953), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(954), 'ustx': tx.uintCV(3987442) }),
tx.tupleCV({ 'to': tx.uintCV(955), 'ustx': tx.uintCV(41905741) }),
tx.tupleCV({ 'to': tx.uintCV(959), 'ustx': tx.uintCV(31968411) }),
tx.tupleCV({ 'to': tx.uintCV(960), 'ustx': tx.uintCV(23546956) }),
tx.tupleCV({ 'to': tx.uintCV(966), 'ustx': tx.uintCV(272915) }),
tx.tupleCV({ 'to': tx.uintCV(967), 'ustx': tx.uintCV(31968411) }),
tx.tupleCV({ 'to': tx.uintCV(968), 'ustx': tx.uintCV(19922216) }),
tx.tupleCV({ 'to': tx.uintCV(977), 'ustx': tx.uintCV(29641508) }),
tx.tupleCV({ 'to': tx.uintCV(979), 'ustx': tx.uintCV(436665) }),
tx.tupleCV({ 'to': tx.uintCV(981), 'ustx': tx.uintCV(116964) }),
tx.tupleCV({ 'to': tx.uintCV(982), 'ustx': tx.uintCV(822645) }),
tx.tupleCV({ 'to': tx.uintCV(985), 'ustx': tx.uintCV(2027372) }),
tx.tupleCV({ 'to': tx.uintCV(987), 'ustx': tx.uintCV(779759) }),
tx.tupleCV({ 'to': tx.uintCV(996), 'ustx': tx.uintCV(779759) }),
tx.tupleCV({ 'to': tx.uintCV(997), 'ustx': tx.uintCV(61871633) }),
tx.tupleCV({ 'to': tx.uintCV(1000), 'ustx': tx.uintCV(31190341) }),
tx.tupleCV({ 'to': tx.uintCV(1001), 'ustx': tx.uintCV(2912665) }),
tx.tupleCV({ 'to': tx.uintCV(1008), 'ustx': tx.uintCV(1037598) }),
tx.tupleCV({ 'to': tx.uintCV(1017), 'ustx': tx.uintCV(39687754) }),
tx.tupleCV({ 'to': tx.uintCV(1022), 'ustx': tx.uintCV(3996097) }),
tx.tupleCV({ 'to': tx.uintCV(1023), 'ustx': tx.uintCV(3391950) }),
tx.tupleCV({ 'to': tx.uintCV(1024), 'ustx': tx.uintCV(7937551) }),
tx.tupleCV({ 'to': tx.uintCV(1027), 'ustx': tx.uintCV(39960974) }),
tx.tupleCV({ 'to': tx.uintCV(1039), 'ustx': tx.uintCV(495147) }),
tx.tupleCV({ 'to': tx.uintCV(1041), 'ustx': tx.uintCV(779759) }),
tx.tupleCV({ 'to': tx.uintCV(1047), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(1048), 'ustx': tx.uintCV(3521569) }),
tx.tupleCV({ 'to': tx.uintCV(1049), 'ustx': tx.uintCV(4867100) }),
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(100000, 10),
    nonce: new BN(743, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
