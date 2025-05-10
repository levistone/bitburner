/** @param {NS} ns */
export async function main(ns) {
  var target = ns.args[0];
  var secthe = ns.getServerMinSecurityLevel(target) + 5
  var monthe = ns.getServerMaxMoney(target) * 0.75

  while (true) {
    if (ns.getServerSecurityLevel(target) > secthe) {
      await ns.weaken(target);
    } else if (ns.getServerMoneyAvailable(target) < monthe) {
        await ns.grow(target);
    } else{
        await ns.hack(target);
    }
  }
}
