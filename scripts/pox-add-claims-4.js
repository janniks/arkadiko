
// node proposal-emergency-shutdown.js
require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(1674), 'ustx': tx.uintCV(88684) }),
tx.tupleCV({ 'to': tx.uintCV(1675), 'ustx': tx.uintCV(1247488) }),
tx.tupleCV({ 'to': tx.uintCV(1676), 'ustx': tx.uintCV(8657955) }),
tx.tupleCV({ 'to': tx.uintCV(1678), 'ustx': tx.uintCV(295613) }),
tx.tupleCV({ 'to': tx.uintCV(1680), 'ustx': tx.uintCV(295613) }),
tx.tupleCV({ 'to': tx.uintCV(1682), 'ustx': tx.uintCV(1330260) }),
tx.tupleCV({ 'to': tx.uintCV(1683), 'ustx': tx.uintCV(698093) }),
tx.tupleCV({ 'to': tx.uintCV(1684), 'ustx': tx.uintCV(595642) }),
tx.tupleCV({ 'to': tx.uintCV(1686), 'ustx': tx.uintCV(4582007) }),
tx.tupleCV({ 'to': tx.uintCV(1688), 'ustx': tx.uintCV(656666) }),
tx.tupleCV({ 'to': tx.uintCV(1689), 'ustx': tx.uintCV(1625873) }),
tx.tupleCV({ 'to': tx.uintCV(1690), 'ustx': tx.uintCV(26608) }),
tx.tupleCV({ 'to': tx.uintCV(1698), 'ustx': tx.uintCV(2473284) }),
tx.tupleCV({ 'to': tx.uintCV(1699), 'ustx': tx.uintCV(9994687) }),
tx.tupleCV({ 'to': tx.uintCV(1700), 'ustx': tx.uintCV(7390334) }),
tx.tupleCV({ 'to': tx.uintCV(1701), 'ustx': tx.uintCV(7390334) }),
tx.tupleCV({ 'to': tx.uintCV(1702), 'ustx': tx.uintCV(100509) }),
tx.tupleCV({ 'to': tx.uintCV(1704), 'ustx': tx.uintCV(8925331) }),
tx.tupleCV({ 'to': tx.uintCV(1709), 'ustx': tx.uintCV(5010977) }),
tx.tupleCV({ 'to': tx.uintCV(1711), 'ustx': tx.uintCV(354736) }),
tx.tupleCV({ 'to': tx.uintCV(1713), 'ustx': tx.uintCV(29877) }),
tx.tupleCV({ 'to': tx.uintCV(1714), 'ustx': tx.uintCV(7675784) }),
tx.tupleCV({ 'to': tx.uintCV(1715), 'ustx': tx.uintCV(1284701) }),
tx.tupleCV({ 'to': tx.uintCV(1718), 'ustx': tx.uintCV(73903) }),
tx.tupleCV({ 'to': tx.uintCV(1719), 'ustx': tx.uintCV(10760520) }),
tx.tupleCV({ 'to': tx.uintCV(1725), 'ustx': tx.uintCV(81736) }),
tx.tupleCV({ 'to': tx.uintCV(1733), 'ustx': tx.uintCV(300147) }),
tx.tupleCV({ 'to': tx.uintCV(1735), 'ustx': tx.uintCV(82772) }),
tx.tupleCV({ 'to': tx.uintCV(1736), 'ustx': tx.uintCV(9459627) }),
tx.tupleCV({ 'to': tx.uintCV(1737), 'ustx': tx.uintCV(121201) }),
tx.tupleCV({ 'to': tx.uintCV(1739), 'ustx': tx.uintCV(1707831) }),
tx.tupleCV({ 'to': tx.uintCV(1740), 'ustx': tx.uintCV(636256) }),
tx.tupleCV({ 'to': tx.uintCV(1741), 'ustx': tx.uintCV(124158) }),
tx.tupleCV({ 'to': tx.uintCV(1748), 'ustx': tx.uintCV(14781) }),
tx.tupleCV({ 'to': tx.uintCV(1749), 'ustx': tx.uintCV(73903) }),
tx.tupleCV({ 'to': tx.uintCV(1750), 'ustx': tx.uintCV(30682125) }),
tx.tupleCV({ 'to': tx.uintCV(1751), 'ustx': tx.uintCV(5912) }),
tx.tupleCV({ 'to': tx.uintCV(1752), 'ustx': tx.uintCV(521192) }),
tx.tupleCV({ 'to': tx.uintCV(1754), 'ustx': tx.uintCV(192359256) }),
tx.tupleCV({ 'to': tx.uintCV(1755), 'ustx': tx.uintCV(4729814) }),
tx.tupleCV({ 'to': tx.uintCV(1756), 'ustx': tx.uintCV(192359256) }),
tx.tupleCV({ 'to': tx.uintCV(1758), 'ustx': tx.uintCV(14949532) }),
tx.tupleCV({ 'to': tx.uintCV(1759), 'ustx': tx.uintCV(1149936) }),
tx.tupleCV({ 'to': tx.uintCV(1760), 'ustx': tx.uintCV(20397321) }),
tx.tupleCV({ 'to': tx.uintCV(1766), 'ustx': tx.uintCV(443420) }),
tx.tupleCV({ 'to': tx.uintCV(1767), 'ustx': tx.uintCV(502543) }),
tx.tupleCV({ 'to': tx.uintCV(1768), 'ustx': tx.uintCV(29561) }),
tx.tupleCV({ 'to': tx.uintCV(1769), 'ustx': tx.uintCV(9324084) }),
tx.tupleCV({ 'to': tx.uintCV(1770), 'ustx': tx.uintCV(5931351) }),
tx.tupleCV({ 'to': tx.uintCV(1775), 'ustx': tx.uintCV(886840) }),
tx.tupleCV({ 'to': tx.uintCV(1777), 'ustx': tx.uintCV(133026) }),
tx.tupleCV({ 'to': tx.uintCV(1778), 'ustx': tx.uintCV(38430) }),
tx.tupleCV({ 'to': tx.uintCV(1783), 'ustx': tx.uintCV(91640) }),
tx.tupleCV({ 'to': tx.uintCV(1784), 'ustx': tx.uintCV(206929348) }),
tx.tupleCV({ 'to': tx.uintCV(1787), 'ustx': tx.uintCV(29561) }),
tx.tupleCV({ 'to': tx.uintCV(1789), 'ustx': tx.uintCV(1980609) }),
tx.tupleCV({ 'to': tx.uintCV(1796), 'ustx': tx.uintCV(53210) }),
tx.tupleCV({ 'to': tx.uintCV(1868), 'ustx': tx.uintCV(5927048) }),
tx.tupleCV({ 'to': tx.uintCV(1869), 'ustx': tx.uintCV(11381114) }),
tx.tupleCV({ 'to': tx.uintCV(1870), 'ustx': tx.uintCV(3695167) }),
tx.tupleCV({ 'to': tx.uintCV(1871), 'ustx': tx.uintCV(1404163) }),
tx.tupleCV({ 'to': tx.uintCV(1872), 'ustx': tx.uintCV(29561) }),
tx.tupleCV({ 'to': tx.uintCV(1873), 'ustx': tx.uintCV(591227) }),
tx.tupleCV({ 'to': tx.uintCV(1874), 'ustx': tx.uintCV(1109779) }),
tx.tupleCV({ 'to': tx.uintCV(1875), 'ustx': tx.uintCV(3000476) }),
tx.tupleCV({ 'to': tx.uintCV(1877), 'ustx': tx.uintCV(1034647) }),
tx.tupleCV({ 'to': tx.uintCV(1878), 'ustx': tx.uintCV(5276698) }),
tx.tupleCV({ 'to': tx.uintCV(1879), 'ustx': tx.uintCV(224666) }),
tx.tupleCV({ 'to': tx.uintCV(1881), 'ustx': tx.uintCV(295613) }),
tx.tupleCV({ 'to': tx.uintCV(1883), 'ustx': tx.uintCV(14780668) }),
tx.tupleCV({ 'to': tx.uintCV(1885), 'ustx': tx.uintCV(192149) }),
tx.tupleCV({ 'to': tx.uintCV(1886), 'ustx': tx.uintCV(296776) }),
tx.tupleCV({ 'to': tx.uintCV(1887), 'ustx': tx.uintCV(82772) }),
tx.tupleCV({ 'to': tx.uintCV(1888), 'ustx': tx.uintCV(296485) }),
tx.tupleCV({ 'to': tx.uintCV(1890), 'ustx': tx.uintCV(1942180) }),
tx.tupleCV({ 'to': tx.uintCV(1891), 'ustx': tx.uintCV(287575933) }),
tx.tupleCV({ 'to': tx.uintCV(1892), 'ustx': tx.uintCV(1469198) }),
tx.tupleCV({ 'to': tx.uintCV(1893), 'ustx': tx.uintCV(13263553) }),
tx.tupleCV({ 'to': tx.uintCV(1894), 'ustx': tx.uintCV(750858) }),
tx.tupleCV({ 'to': tx.uintCV(1895), 'ustx': tx.uintCV(88684) }),
tx.tupleCV({ 'to': tx.uintCV(1897), 'ustx': tx.uintCV(295613) }),
tx.tupleCV({ 'to': tx.uintCV(1899), 'ustx': tx.uintCV(14780668) }),
tx.tupleCV({ 'to': tx.uintCV(1900), 'ustx': tx.uintCV(147807) }),
tx.tupleCV({ 'to': tx.uintCV(1904), 'ustx': tx.uintCV(295613) }),
tx.tupleCV({ 'to': tx.uintCV(1905), 'ustx': tx.uintCV(180409566) }),
tx.tupleCV({ 'to': tx.uintCV(1906), 'ustx': tx.uintCV(2364907) }),
tx.tupleCV({ 'to': tx.uintCV(1907), 'ustx': tx.uintCV(233535) }),
tx.tupleCV({ 'to': tx.uintCV(1908), 'ustx': tx.uintCV(443420) }),
tx.tupleCV({ 'to': tx.uintCV(1911), 'ustx': tx.uintCV(10346467) }),
tx.tupleCV({ 'to': tx.uintCV(1912), 'ustx': tx.uintCV(591227) }),
tx.tupleCV({ 'to': tx.uintCV(1913), 'ustx': tx.uintCV(2069293) }),
tx.tupleCV({ 'to': tx.uintCV(1914), 'ustx': tx.uintCV(3378861) }),
tx.tupleCV({ 'to': tx.uintCV(1916), 'ustx': tx.uintCV(6207880) }),
tx.tupleCV({ 'to': tx.uintCV(1918), 'ustx': tx.uintCV(1182453) }),
tx.tupleCV({ 'to': tx.uintCV(1919), 'ustx': tx.uintCV(14780668) }),
tx.tupleCV({ 'to': tx.uintCV(1920), 'ustx': tx.uintCV(1478067) }),
tx.tupleCV({ 'to': tx.uintCV(1921), 'ustx': tx.uintCV(419771) }),
tx.tupleCV({ 'to': tx.uintCV(1922), 'ustx': tx.uintCV(2364907) }),
tx.tupleCV({ 'to': tx.uintCV(1923), 'ustx': tx.uintCV(29531774) }),
tx.tupleCV({ 'to': tx.uintCV(1924), 'ustx': tx.uintCV(147807) }),
tx.tupleCV({ 'to': tx.uintCV(1925), 'ustx': tx.uintCV(29561) }),
tx.tupleCV({ 'to': tx.uintCV(1926), 'ustx': tx.uintCV(4877620) }),
tx.tupleCV({ 'to': tx.uintCV(1927), 'ustx': tx.uintCV(354736) }),
tx.tupleCV({ 'to': tx.uintCV(1929), 'ustx': tx.uintCV(487762) }),
tx.tupleCV({ 'to': tx.uintCV(1930), 'ustx': tx.uintCV(59122671) }),
tx.tupleCV({ 'to': tx.uintCV(1931), 'ustx': tx.uintCV(384297) }),
tx.tupleCV({ 'to': tx.uintCV(1933), 'ustx': tx.uintCV(295613) }),
tx.tupleCV({ 'to': tx.uintCV(1935), 'ustx': tx.uintCV(798156) }),
tx.tupleCV({ 'to': tx.uintCV(1936), 'ustx': tx.uintCV(27956155) }),
tx.tupleCV({ 'to': tx.uintCV(1937), 'ustx': tx.uintCV(221710) }),
tx.tupleCV({ 'to': tx.uintCV(1938), 'ustx': tx.uintCV(2240749) }),
tx.tupleCV({ 'to': tx.uintCV(1940), 'ustx': tx.uintCV(53210) }),
tx.tupleCV({ 'to': tx.uintCV(1941), 'ustx': tx.uintCV(295613) }),
tx.tupleCV({ 'to': tx.uintCV(1942), 'ustx': tx.uintCV(14781) }),
tx.tupleCV({ 'to': tx.uintCV(1944), 'ustx': tx.uintCV(591227) }),
tx.tupleCV({ 'to': tx.uintCV(1946), 'ustx': tx.uintCV(103465) }),
tx.tupleCV({ 'to': tx.uintCV(1949), 'ustx': tx.uintCV(7390334) }),
tx.tupleCV({ 'to': tx.uintCV(1950), 'ustx': tx.uintCV(2660520) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(100000, 10),
    nonce: new BN(653, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
