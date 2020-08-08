# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > object-shorthand`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/types/object-shorthand/input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/types/object-shorthand/input.ts"
		end: Object {
			column: 0
			line: 6
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	comments: Array [
		CommentLine {
			id: "0"
			value: " actually put."
			loc: Object {
				filename: "typescript/types/object-shorthand/input.ts"
				end: Object {
					column: 20
					line: 3
				}
				start: Object {
					column: 4
					line: 3
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "typescript/types/object-shorthand/input.ts"
				end: Object {
					column: 2
					line: 5
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "typescript/types/object-shorthand/input.ts"
					end: Object {
						column: 2
						line: 5
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "table"
							loc: Object {
								filename: "typescript/types/object-shorthand/input.ts"
								identifierName: "table"
								end: Object {
									column: 11
									line: 1
								}
								start: Object {
									column: 6
									line: 1
								}
							}
						}
						loc: Object {
							filename: "typescript/types/object-shorthand/input.ts"
							end: Object {
								column: 1
								line: 5
							}
							start: Object {
								column: 6
								line: 1
							}
						}
						init: JSObjectExpression {
							loc: Object {
								filename: "typescript/types/object-shorthand/input.ts"
								end: Object {
									column: 1
									line: 5
								}
								start: Object {
									column: 14
									line: 1
								}
							}
							properties: Array [
								JSObjectMethod {
									kind: "method"
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "put"
											loc: Object {
												filename: "typescript/types/object-shorthand/input.ts"
												identifierName: "put"
												end: Object {
													column: 5
													line: 2
												}
												start: Object {
													column: 2
													line: 2
												}
											}
										}
										loc: Object {
											filename: "typescript/types/object-shorthand/input.ts"
											end: Object {
												column: 5
												line: 2
											}
											start: Object {
												column: 2
												line: 2
											}
										}
									}
									loc: Object {
										filename: "typescript/types/object-shorthand/input.ts"
										end: Object {
											column: 3
											line: 4
										}
										start: Object {
											column: 2
											line: 2
										}
									}
									body: JSBlockStatement {
										body: Array []
										directives: Array []
										trailingComments: Array []
										innerComments: Array ["0"]
										loc: Object {
											filename: "typescript/types/object-shorthand/input.ts"
											end: Object {
												column: 3
												line: 4
											}
											start: Object {
												column: 42
												line: 2
											}
										}
									}
									head: JSFunctionHead {
										async: false
										generator: false
										hasHoistedVars: false
										rest: undefined
										returnType: undefined
										thisType: undefined
										loc: Object {
											filename: "typescript/types/object-shorthand/input.ts"
											end: Object {
												column: 41
												line: 2
											}
											start: Object {
												column: 31
												line: 2
											}
										}
										params: Array [
											JSBindingIdentifier {
												name: "value"
												loc: Object {
													filename: "typescript/types/object-shorthand/input.ts"
													identifierName: "value"
													end: Object {
														column: 37
														line: 2
													}
													start: Object {
														column: 32
														line: 2
													}
												}
												meta: JSPatternMeta {
													optional: undefined
													loc: Object {
														filename: "typescript/types/object-shorthand/input.ts"
														end: Object {
															column: 40
															line: 2
														}
														start: Object {
															column: 32
															line: 2
														}
													}
													typeAnnotation: TSTypeReference {
														typeParameters: undefined
														loc: Object {
															filename: "typescript/types/object-shorthand/input.ts"
															end: Object {
																column: 40
																line: 2
															}
															start: Object {
																column: 39
																line: 2
															}
														}
														typeName: JSReferenceIdentifier {
															name: "T"
															loc: Object {
																filename: "typescript/types/object-shorthand/input.ts"
																identifierName: "T"
																end: Object {
																	column: 40
																	line: 2
																}
																start: Object {
																	column: 39
																	line: 2
																}
															}
														}
													}
												}
											}
										]
										typeParameters: TSTypeParameterDeclaration {
											loc: Object {
												filename: "typescript/types/object-shorthand/input.ts"
												end: Object {
													column: 31
													line: 2
												}
												start: Object {
													column: 5
													line: 2
												}
											}
											params: Array [
												TSTypeParameter {
													name: "T"
													default: undefined
													loc: Object {
														filename: "typescript/types/object-shorthand/input.ts"
														end: Object {
															column: 30
															line: 2
														}
														start: Object {
															column: 6
															line: 2
														}
													}
													constraint: TSObjectTypeAnnotation {
														loc: Object {
															filename: "typescript/types/object-shorthand/input.ts"
															end: Object {
																column: 30
																line: 2
															}
															start: Object {
																column: 16
																line: 2
															}
														}
														members: Array [
															TSPropertySignature {
																key: JSStaticPropertyKey {
																	value: JSIdentifier {
																		name: "id"
																		loc: Object {
																			filename: "typescript/types/object-shorthand/input.ts"
																			identifierName: "id"
																			end: Object {
																				column: 20
																				line: 2
																			}
																			start: Object {
																				column: 18
																				line: 2
																			}
																		}
																	}
																	loc: Object {
																		filename: "typescript/types/object-shorthand/input.ts"
																		end: Object {
																			column: 20
																			line: 2
																		}
																		start: Object {
																			column: 18
																			line: 2
																		}
																	}
																}
																optional: false
																readonly: false
																loc: Object {
																	filename: "typescript/types/object-shorthand/input.ts"
																	end: Object {
																		column: 28
																		line: 2
																	}
																	start: Object {
																		column: 18
																		line: 2
																	}
																}
																typeAnnotation: TSStringKeywordTypeAnnotation {
																	loc: Object {
																		filename: "typescript/types/object-shorthand/input.ts"
																		end: Object {
																			column: 28
																			line: 2
																		}
																		start: Object {
																			column: 22
																			line: 2
																		}
																	}
																}
															}
														]
													}
												}
											]
										}
									}
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```