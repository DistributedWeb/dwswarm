// This file is auto generated by the protocol-buffers compiler

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */

// Remember to `npm install --save protocol-buffers-encodings`
var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

var PeersInput = exports.PeersInput = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var PeersOutput = exports.PeersOutput = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

definePeersInput()
definePeersOutput()

function definePeersInput () {
  var enc = [
    encodings.varint,
    encodings.bytes,
    encodings.bool
  ]

  PeersInput.encodingLength = encodingLength
  PeersInput.encode = encode
  PeersInput.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.port)) {
      var len = enc[0].encodingLength(obj.port)
      length += 1 + len
    }
    if (defined(obj.localAddress)) {
      var len = enc[1].encodingLength(obj.localAddress)
      length += 1 + len
    }
    if (defined(obj.unannounce)) {
      var len = enc[2].encodingLength(obj.unannounce)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.port)) {
      buf[offset++] = 8
      enc[0].encode(obj.port, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.localAddress)) {
      buf[offset++] = 18
      enc[1].encode(obj.localAddress, buf, offset)
      offset += enc[1].encode.bytes
    }
    if (defined(obj.unannounce)) {
      buf[offset++] = 24
      enc[2].encode(obj.unannounce, buf, offset)
      offset += enc[2].encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      port: 0,
      localAddress: null,
      unannounce: false
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.port = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 2:
        obj.localAddress = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        break
        case 3:
        obj.unannounce = enc[2].decode(buf, offset)
        offset += enc[2].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function definePeersOutput () {
  var enc = [
    encodings.bytes
  ]

  PeersOutput.encodingLength = encodingLength
  PeersOutput.encode = encode
  PeersOutput.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.peers)) {
      var len = enc[0].encodingLength(obj.peers)
      length += 1 + len
    }
    if (defined(obj.localPeers)) {
      var len = enc[0].encodingLength(obj.localPeers)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.peers)) {
      buf[offset++] = 10
      enc[0].encode(obj.peers, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.localPeers)) {
      buf[offset++] = 18
      enc[0].encode(obj.localPeers, buf, offset)
      offset += enc[0].encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      peers: null,
      localPeers: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.peers = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 2:
        obj.localPeers = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}
