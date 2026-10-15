'use strict';

const ipToNumber = (ip = '127.0.0.1') => {
  const octets = ip.split('.').map(Number);
  const shiftedOctets = octets.map(
    (octet, index) => octet << (8 * (3 - index)),
  );

  return shiftedOctets.reduce((sum, octet) => sum + octet, 0);
};

console.log(ipToNumber());
console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('192.168.1.10'));

