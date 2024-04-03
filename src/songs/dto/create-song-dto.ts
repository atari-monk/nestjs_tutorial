import {
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator'

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string

  @IsArray()
  @ArrayMinSize(1)
  @ArrayUnique()
  @IsString({ each: true })
  readonly artists: string[]

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date
}
