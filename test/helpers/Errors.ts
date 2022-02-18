export enum Game {
  ERR_UNKNOWN_FUNC = "100",
  ERR_CANT_UNPACK_LAMBDA = "101",
  ERR_HIGH_FUNC_INDEX = "102",
  ERR_FUNC_SET = "103",
  ERR_TOO_LOW_REGISTRATION_START = "104",
  ERR_TOO_LOW_BETTING_START = "105",
  ERR_TOO_LOW_RACE_START = "106",
}

export enum Common {
  ERR_NOT_ADMIN = "200",
  ERR_NOT_PENDING_ADMIN = "201",
}

export enum UbineticProxy {
  ERR_UBINETIC_GET_CURRENT_EPOCH_VIEW_404 = "300",
  ERR_UBINETIC_GET_ENTROPY_VIEW_404 = "301",
}

export enum RandomizerProxy {
  ERR_RANDOMIZER_GET_RANDOM_BETWEEN_ENTROPY_BYTES_VIEW_404 = "400",
}
