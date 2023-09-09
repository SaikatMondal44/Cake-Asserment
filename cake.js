// mat = material cost
// black forest = blf,vanila cake = vanc,red velvet = redv,chocolate cake = choc,lamon sponge cake = lemc
// mat cost for each cake = matc

matc_blf = 150
matc_vanc = 160
matc_redv = 170
matc_choc = 180
matc_lemc = 190

// transportation cost for per pound = trac
trac = 50

// utility cost for per pound = utc
utc_blf = (matc_blf+trac)*(3/100)
console.log(utc_blf)
utc_vanc = (matc_vanc+trac)*(3/100)
console.log(utc_vanc )
utc_redv = (matc_redv+trac)*(3/100)
console.log(utc_redv)
utc_choc = (matc_choc+trac)*(3/100)
console.log(utc_choc)
utc_lemc =(matc_lemc+trac)*(3/100)
console.log(utc_lemc)

// space cost per pound = spac
spac = 60

// staff cost per pound = stac
stac= 70

// per pound cost = ppc
ppc_blf = matc_blf+trac+utc_blf+spac+stac
console.log(ppc_blf)
ppc_vanc = matc_vanc+trac+utc_vanc+spac+stac
console.log(ppc_vanc)
ppc_redv = matc_redv+trac+utc_redv+spac+stac
console.log(ppc_redv)
ppc_choc = matc_choc+trac+utc_choc+spac+stac
console.log(ppc_choc)
ppc_lemc = matc_lemc+trac+utc_lemc+spac+stac
console.log(ppc_lemc)

// quantity in pound = qup
qup_blf = 5 
qup_vanc = 7
qup_redv = 9
qup_choc = 11
qup_lemc = 13

// total inventory cost for each cake = toic
toic_blf = ppc_blf*qup_blf
console.log(toic_blf)
toic_vanc = ppc_vanc*qup_vanc
console.log(toic_vanc)
toic_redv = ppc_redv*qup_redv
console.log(toic_redv)
toic_choc = ppc_choc*qup_choc
console.log(toic_choc)
toic_lemc = ppc_lemc*qup_lemc
console.log(toic_lemc)

// price before discount = pcbd
pcbd_blf = 800
pcbd_vanc = 850
pcbd_redv = 900
pcbd_choc = 950
pcbd_lemc = 1000

// sell price after 13% discount = spd
spd_pcbd_blf = pcbd_blf - (pcbd_blf*13/100)
console.log(spd_pcbd_blf)
spd_pcbd_vanc = pcbd_vanc - (pcbd_vanc*13/100)
console.log(spd_pcbd_vanc)
spd_pcbd_redv = pcbd_redv - ( pcbd_redv*13/100)
console.log(spd_pcbd_redv)
spd_pcbd_choc = pcbd_choc - (pcbd_choc*13/100)
console.log(spd_pcbd_choc)
spd_pcbd_lemc = pcbd_lemc - (pcbd_lemc*13/100)
console.log(spd_pcbd_lemc)

// profit per pound = ppp
ppp_blf = spd_pcbd_blf - ppc_blf
console.log(ppp_blf)
ppp_vanc = spd_pcbd_vanc - ppc_vanc
console.log(ppp_vanc)
ppp_redv = spd_pcbd_redv - ppc_redv
console.log(ppp_redv)
ppp_choc = spd_pcbd_choc - ppc_choc
console.log(ppp_choc)
ppp_lemc = spd_pcbd_lemc - ppc_lemc
console.log(ppp_lemc)

// total profit for each cake = totp
totp_blf = ppp_blf*qup_blf
console.log(totp_blf )
totp_vanc = ppp_vanc*qup_vanc
console.log(totp_vanc)
totp_redv = ppp_redv*qup_redv
console.log(totp_redv)
totp_choc = ppp_choc*qup_choc
console.log(totp_choc)
totp_lemc = ppp_lemc*qup_lemc
console.log(totp_lemc)

// profit percentage for each cake = ppe
ppe_blf = (totp_blf/toic_blf)*100 
console.log(ppe_blf)
ppe_vanc = (totp_vanc/toic_vanc)*100 
console.log(ppe_vanc)
ppe_redv = (totp_redv/toic_redv)*100 
console.log(ppe_redv)
ppe_choc = (totp_choc/toic_choc)*100
console.log(ppe_choc)
ppe_lemc = (totp_lemc/toic_lemc)*100
console.log(ppe_lemc)
