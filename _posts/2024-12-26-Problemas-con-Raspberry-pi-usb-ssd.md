---
layout: post
title: Problemas con disco SSD en puerto USB3 de mi Raspberry pi 4B
date: 2024-12-26
---

Recientemente por navidad me regale un [SSD de 1TB](https://amzn.eu/d/8JSV4IM) para almacenar mis datos, videos y demás ya que estaba en oferta. 

Tengo un [raspberry pi 4B](https://amzn.eu/d/0vlmhFf) que utilizo para mis proyectos personales. En el tengo desplegados los siguientes servicios:

- Pihole 
- Samba
- Jellyfin
- Plex
- Jackett
- Sonarr
- Radarr
- Transmission-openvpn
- Overseerr
- Twingate
- Homepage
- Portainer

Luego de conectar el SSD utilizando una [carcasa](https://amzn.eu/d/jbXfyQ3) que compré también en oferta, después de 12h aprox la raspberry pi dejo de reconocer el dispositivo mostrandome los siguientes mensajes en `dmesg`:

```bash
[  105.485849] xhci_hcd 0000:01:00.0: WARNING: Host System Error
[  110.559295] xhci_hcd 0000:01:00.0: xHCI host not responding to stop endpoint command
[  110.559312] xhci_hcd 0000:01:00.0: xHCI host controller not responding, assume dead
[  110.559357] xhci_hcd 0000:01:00.0: HC died; cleaning up
[  110.559437] sd 0:0:0:0: [sda] tag#10 uas_eh_abort_handler 0 uas-tag 1 inflight: CMD
[  110.559445] sd 0:0:0:0: [sda] tag#10 CDB: opcode=0x28 28 00 05 80 08 48 00 00 10 00
[  110.559451] sd 0:0:0:0: [sda] tag#9 uas_eh_abort_handler 0 uas-tag 22 inflight: CMD
[  110.559455] sd 0:0:0:0: [sda] tag#9 CDB: opcode=0x28 28 00 05 80 08 20 00 00 10 00
[  110.559460] sd 0:0:0:0: [sda] tag#8 uas_eh_abort_handler 0 uas-tag 21 inflight: CMD
[  110.559464] sd 0:0:0:0: [sda] tag#8 CDB: opcode=0x28 28 00 05 80 08 00 00 00 08 00
[  110.559469] sd 0:0:0:0: [sda] tag#7 uas_eh_abort_handler 0 uas-tag 4 inflight: CMD
[  110.559473] sd 0:0:0:0: [sda] tag#7 CDB: opcode=0x28 28 00 05 40 08 58 00 00 10 00
[  110.559478] sd 0:0:0:0: [sda] tag#6 uas_eh_abort_handler 0 uas-tag 20 inflight: CMD
[  110.559482] sd 0:0:0:0: [sda] tag#6 CDB: opcode=0x28 28 00 05 40 08 30 00 00 18 00
[  110.559487] sd 0:0:0:0: [sda] tag#5 uas_eh_abort_handler 0 uas-tag 19 inflight: CMD
[  110.559490] sd 0:0:0:0: [sda] tag#5 CDB: opcode=0x28 28 00 05 40 08 10 00 00 10 00
[  110.559495] sd 0:0:0:0: [sda] tag#4 uas_eh_abort_handler 0 uas-tag 18 inflight: CMD
[  110.559499] sd 0:0:0:0: [sda] tag#4 CDB: opcode=0x28 28 00 05 40 08 00 00 00 08 00
[  110.559504] sd 0:0:0:0: [sda] tag#3 uas_eh_abort_handler 0 uas-tag 17 inflight: CMD
[  110.559507] sd 0:0:0:0: [sda] tag#3 CDB: opcode=0x28 28 00 05 00 08 60 00 00 10 00
[  110.559512] sd 0:0:0:0: [sda] tag#2 uas_eh_abort_handler 0 uas-tag 16 inflight: CMD
[  110.559516] sd 0:0:0:0: [sda] tag#2 CDB: opcode=0x28 28 00 05 00 08 38 00 00 08 00
[  110.559521] sd 0:0:0:0: [sda] tag#1 uas_eh_abort_handler 0 uas-tag 15 inflight: CMD
[  110.559524] sd 0:0:0:0: [sda] tag#1 CDB: opcode=0x28 28 00 05 00 08 00 00 00 08 00
[  110.559529] sd 0:0:0:0: [sda] tag#0 uas_eh_abort_handler 0 uas-tag 14 inflight: CMD
[  110.559532] sd 0:0:0:0: [sda] tag#0 CDB: opcode=0x28 28 00 04 c0 08 68 00 00 10 00
[  110.559538] sd 0:0:0:0: [sda] tag#25 uas_eh_abort_handler 0 uas-tag 3 inflight: CMD
[  110.559541] sd 0:0:0:0: [sda] tag#25 CDB: opcode=0x28 28 00 74 70 6d 00 00 00 08 00
[  110.559559] usb 1-1: USB disconnect, device number 2
[  110.560054] usb 2-2: USB disconnect, device number 2
[  110.560166] sd 0:0:0:0: [sda] tag#15 uas_zap_pending 0 uas-tag 5 inflight: CMD
[  110.560173] sd 0:0:0:0: [sda] tag#15 CDB: opcode=0x28 28 00 00 01 2c b0 00 00 08 00
[  110.560210] sd 0:0:0:0: [sda] tag#15 UNKNOWN(0x2003) Result: hostbyte=0x01 driverbyte=DRIVER_OK cmd_age=9s
[  110.560225] sd 0:0:0:0: [sda] tag#15 CDB: opcode=0x28 28 00 00 01 2c b0 00 00 08 00
[  110.560232] I/O error, dev sda, sector 76976 op 0x0:(READ) flags 0x3000 phys_seg 1 prio class 2
[  110.560274] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm dockerd: reading directory lblock 0
[  110.560409] device offline error, dev sda, sector 76976 op 0x0:(READ) flags 0x3000 phys_seg 1 prio class 2
[  110.560970] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm dockerd: reading directory lblock 0
[  110.561203] device offline error, dev sda, sector 76976 op 0x0:(READ) flags 0x3000 phys_seg 1 prio class 2
[  110.563398] device offline error, dev sda, sector 973342720 op 0x1:(WRITE) flags 0x9800 phys_seg 1 prio class 2
[  110.563450] Buffer I/O error on dev sda1, logical block 121667584, lost sync page write
[  110.563676] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm runc:[2:INIT]: reading directory lblock 0
[  110.564815] device offline error, dev sda, sector 76976 op 0x0:(READ) flags 0x3000 phys_seg 1 prio class 2
[  110.564905] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm dockerd: reading directory lblock 0
[  110.565379] device offline error, dev sda, sector 76976 op 0x0:(READ) flags 0x3000 phys_seg 1 prio class 2
[  110.565555] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm dockerd: reading directory lblock 0
[  110.565990] device offline error, dev sda, sector 76976 op 0x0:(READ) flags 0x3000 phys_seg 1 prio class 2
[  110.566173] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm dockerd: reading directory lblock 0
[  110.566241] JBD2: I/O error when updating journal superblock for sda1-8.
[  110.566251] Aborting journal on device sda1-8.
[  110.566303] device offline error, dev sda, sector 76976 op 0x0:(READ) flags 0x3000 phys_seg 1 prio class 2
[  110.566323] device offline error, dev sda, sector 973342720 op 0x1:(WRITE) flags 0x9800 phys_seg 1 prio class 2
[  110.566330] device offline error, dev sda, sector 973342720 op 0x1:(WRITE) flags 0x9800 phys_seg 1 prio class 2
[  110.566335] Buffer I/O error on dev sda1, logical block 121667584, lost sync page write
[  110.566353] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm dockerd: reading directory lblock 0
[  110.566386] JBD2: I/O error when updating journal superblock for sda1-8.
[  110.566447] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm dockerd: reading directory lblock 0
[  110.566597] Buffer I/O error on dev sda1, logical block 0, lost sync page write
[  110.566609] EXT4-fs error (device sda1): __ext4_find_entry:1683: inode #2: comm dockerd: reading directory lblock 0
[  110.566629] EXT4-fs (sda1): shut down requested (2)
[  110.566684] EXT4-fs (sda1): I/O error while writing superblock
[  110.566726] Buffer I/O error on dev sda1, logical block 0, lost sync page write
[  110.566743] EXT4-fs (sda1): I/O error while writing superblock
[  110.579622] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579646] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579650] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579653] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579656] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579659] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579662] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579665] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579668] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579671] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579674] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579678] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579681] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579684] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579687] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579690] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579693] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579696] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579700] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579703] sd 0:0:0:0: Device offlined - not ready after error recovery
[  110.579738] sd 0:0:0:0: [sda] tag#25 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=32s
[  110.579748] sd 0:0:0:0: [sda] tag#25 CDB: opcode=0x28 28 00 74 70 6d 00 00 00 08 00
[  110.579793] sd 0:0:0:0: [sda] tag#0 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=36s
[  110.579798] sd 0:0:0:0: [sda] tag#0 CDB: opcode=0x28 28 00 04 c0 08 68 00 00 10 00
[  110.579815] sd 0:0:0:0: [sda] tag#1 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=36s
[  110.579819] sd 0:0:0:0: [sda] tag#1 CDB: opcode=0x28 28 00 05 00 08 00 00 00 08 00
[  110.579844] sd 0:0:0:0: [sda] tag#2 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=36s
[  110.579850] sd 0:0:0:0: [sda] tag#2 CDB: opcode=0x28 28 00 05 00 08 38 00 00 08 00
[  110.579862] sd 0:0:0:0: [sda] tag#3 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=36s
[  110.579859] Buffer I/O error on dev sda1, logical block 244190368, async page read
[  110.579866] sd 0:0:0:0: [sda] tag#3 CDB: opcode=0x28 28 00 05 00 08 60 00 00 10 00
[  110.579878] sd 0:0:0:0: [sda] tag#4 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=36s
[  110.579883] sd 0:0:0:0: [sda] tag#4 CDB: opcode=0x28 28 00 05 40 08 00 00 00 08 00
[  110.579893] sd 0:0:0:0: [sda] tag#5 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=36s
[  110.579898] sd 0:0:0:0: [sda] tag#5 CDB: opcode=0x28 28 00 05 40 08 10 00 00 10 00
[  110.579911] sd 0:0:0:0: [sda] tag#6 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=36s
[  110.579915] sd 0:0:0:0: [sda] tag#6 CDB: opcode=0x28 28 00 05 40 08 30 00 00 18 00
[  110.579933] sd 0:0:0:0: [sda] tag#7 UNKNOWN(0x2003) Result: hostbyte=0x07 driverbyte=DRIVER_OK cmd_age=36s
[  110.579937] sd 0:0:0:0: [sda] tag#7 CDB: opcode=0x28 28 00 05 40 08 58 00 00 10 00
[  110.627656] sd 0:0:0:0: [sda] Synchronizing SCSI cache
[  110.649895] sd 0:0:0:0: [sda] Synchronize Cache(10) failed: Result: hostbyte=0x07 driverbyte=DRIVER_OK
[  110.651240] scsi 0:0:0:0: rejecting I/O to dead device
[  110.651589] xhci_hcd 0000:01:00.0: WARN Can't disable streams for endpoint 0x82, streams are being disabled already
[  110.894702] EXT4-fs (sda1): unmounting filesystem 3f7d608d-0d52-4e00-a58b-12126dd6adc2.
```

Buscando en foros encontré el siguiente [artículo](https://bbs.archlinux.org/viewtopic.php?id=245295) que me proporcionó la solución:

```bash
# Añadir la siguiente línea al final del fichero /boot/firmware/config.txt
max_usb_current=1
```

Y después, reiniciar.

Espero que os sirva tanto como a mí. Feliz y próspero año nuevo a todos!!!